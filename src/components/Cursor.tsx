"use client"

import { useState, useEffect, useRef } from "react"

export default function Cursor() {
    const mousePosition = useRef({ x: 0, y: 0 })

    const dotPosition = useRef({ x: 0, y: 0 })
    const borderDotPosition = useRef({ x: 0, y: 0 })

    const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } })
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const clickTimeRef = useRef(0)
    const [hasMouse, setHasMouse] = useState(() => {
        if (typeof window === "undefined") return false
        return window.matchMedia("(pointer: fine)").matches
    })

    const DOT_SMOOTHNESS = 0.2
    const BORDER_DOT_SMOOTHNESS = 0.1
    const MIN_CLICK_DURATION = 200 // minimum pulse duration in ms

    // Subscribe to pointer type changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: fine)")

        const handleChange = (e: MediaQueryListEvent) => {
            setHasMouse(e.matches)
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        if (!hasMouse) return
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        const handleMouseDown = () => {
            clickTimeRef.current = Date.now()
            setIsClicking(true)
        }
        const handleMouseUp = () => {
            const elapsed = Date.now() - clickTimeRef.current
            const remaining = MIN_CLICK_DURATION - elapsed
            if (remaining > 0) {
                setTimeout(() => setIsClicking(false), remaining)
            } else {
                setIsClicking(false)
            }
        }

        // Add event listeners
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)

        const interactiveElements = document.querySelectorAll("a, button, input, textarea, select")
        interactiveElements.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter)
            element.addEventListener("mouseleave", handleMouseLeave)
        })

        // Animation function for smooth movement
        const animate = () => {
            const lerp = (start: number, end: number, factor: number) => {
                return start + (end - start) * factor
            }

            dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS)
            dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS)

            borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS)
            borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS)

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
            })

            requestAnimationFrame(animate)
        }

        // Start animation loop
        const animationId = requestAnimationFrame(animate)

        // Clean up
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)

            interactiveElements.forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter)
                element.removeEventListener("mouseleave", handleMouseLeave)
            })

            cancelAnimationFrame(animationId)
        }
    }, [hasMouse])

    if (typeof window === "undefined" || !hasMouse) return null

    return (
        <div className="pointer-events-none fixed inset-0 z-1000">
            <div
                className="absolute rounded-full dark:bg-white bg-black "
                style={{
                    width: "8px",
                    height: "8px",
                    transform: "translate(-50%, -50%)",
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                }}
            />

            <div
                className="absolute rounded-full border dark:border-white border-black backdrop-invert"
                style={{
                    width: isHovering ? "44px" : "28px",
                    height: isHovering ? "44px" : "28px",
                    transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: "width 0.3s, height 0.3s, transform 0.15s ease-out",
                }}
            />
        </div>
    )
}
