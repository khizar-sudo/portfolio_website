import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Transition } from "../components";

type FormState = {
  message: string;
  success: boolean;
} | null;

async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  formData.append("access_key", import.meta.env.VITE_WEB3_KEY);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    return {
      message: "Thank You! I'll get back to you shortly.",
      success: true,
    };
  }

  return {
    message: "Something went wrong. Please try again later.",
    success: false,
  };
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`py-3 px-8 outline-none w-fit font-bold shadow-md rounded-xl transition-all duration-200 ease-in-out border-2 border-black dark:border-white flex items-center gap-2 ${pending
        ? "bg-black text-white dark:bg-white dark:text-black opacity-80 cursor-wait"
        : "bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        }`}
      disabled={pending}
    >
      {pending && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {pending ? "Sending..." : "Send"}
    </button>
  );
}

const Contact = () => {
  const [state, formAction] = useActionState(submitContact, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 my-auto justify-center items-center sm:mt-8">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-center">
          Get in Touch
        </h1>
        <form
          ref={formRef}
          action={formAction}
          className="flex w-full sm:w-3/4 lg:sm:w-1/2 flex-col gap-8 my-6 border-2 border-black dark:border-white p-4 sm:p-6 rounded-xl formBackground"
        >
          <label className="flex flex-col cursor-none">
            <span className="font-semibold text-lg mb-4 ">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Whats your name?"
              className="py-4 px-6 rounded-lg outline-none font-medium bg-white dark:bg-black border-2 border-black dark:border-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-4 text-lg">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Whats your email?"
              className="py-4 px-6 rounded-lg outline-none font-medium bg-white dark:bg-black border-2 border-black dark:border-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-4 text-lg">Message</span>
            <textarea
              rows={7}
              name="message"
              required
              placeholder="What do you want to say?"
              className="py-4 px-6 rounded-lg outline-none font-medium bg-white dark:bg-black border-2 border-black dark:border-white"
            />
          </label>
          <div className="flex flex-col gap-4">
            <SubmitButton />
            {state?.message && (
              <p className={`font-medium ${state.success ? "text-green-600" : "text-red-600"}`}>
                {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
      <Transition />
    </div>
  );
};

export default Contact;
