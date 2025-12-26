"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "../actions/email";

export default function ContactForm() {
  const [contentCollab, setContentCollab] = useState(false);
  const [CollaboType, setCollaboType] = useState("brand");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  const radioHandler = (status: boolean, type: string) => {
    setContentCollab(status);
    setCollaboType(type);
  };

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    formData["collaboType"] = CollaboType;

    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.success) {
        setSucceeded(true);
      } else {
        setError(true);
      }
    });
  }

  return (
    <form className="flex flex-col space-y-4 p-4" onSubmit={handleOnSubmit}>
      <span className="pb-2">Collaboration request</span>
      <div>
        <input
          type="radio"
          id="brand"
          name="collaboType"
          value="brand"
          className="accent-fuchsia-600"
          defaultChecked={true}
          onChange={(e) => radioHandler(false, "brand")}
        />
        <label htmlFor="brand">Brand collaboration</label>
      </div>
      <div>
        <input
          type="radio"
          id="content"
          name="collaboType"
          value="content"
          className="accent-fuchsia-600"
          onChange={(e) => radioHandler(true, "content")}
        />
        <label htmlFor="content">Content collaboration</label>
      </div>
      <input
        className="input input-bordered"
        placeholder="Name"
        id="name"
        type="text"
        name="name"
        required
      />
      <input
        className="input input-bordered"
        placeholder="Email Address"
        id="email"
        type="email"
        name="email"
        required
      />

      {contentCollab && (
        <>
          <input
            className="input input-bordered"
            placeholder="Instagram"
            id="instagram"
            type="text"
            name="instagram"
            required
          />
        </>
      )}

      <textarea
        className="textarea textarea-bordered"
        placeholder="More information"
        id="message"
        name="message"
        required
      />
      <button className="btn btn-secondary" type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Submit"}
      </button>
      {error && (
        <>
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Something went wrong sending message.</span>
            </div>
          </div>
        </>
      )}
    </form>
  );
}


