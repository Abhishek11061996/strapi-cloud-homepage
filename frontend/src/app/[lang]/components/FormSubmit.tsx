"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";

export default function FormSubmit({
  placeholder,
  text,
}: {
  placeholder: string;
  text: string;
}) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit() {
    if (email === "") {
      setErrorMessage("Email cannot be blank.");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { email } }),
    });

    if (!res.ok) {
      setErrorMessage("Email failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Email successfully submitted!");
    setEmail("");
  }

  return (
    <div className="flex flex-row items-center justify-start flex-shrink-0 shadow-md border rounded-full w-96 bg-white">
      <div className="flex flex-col">
        <div className="flex flex-row">
          {successMessage ? (
            <p className="text-green-700 bg-green-300 px-4 py-2 rounded-full rounded-r-none">
              {successMessage}
            </p>
          ) : (
            <>
              <input
                type="email"
                placeholder={errorMessage || placeholder}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-3/5 p-3 pt-3 pb-3 rounded-full text-gray-700 bg-white"
              />
              <button
                type="button"
                className="w-2/5 p-3 mt-2 mb-2 ml-9 font-semibold rounded-full bg-cyan-700 text-white"
                onClick={handleSubmit}
              >
                {text}
              </button>
            </>
          )}
        </div>

        {errorMessage && (
          <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
