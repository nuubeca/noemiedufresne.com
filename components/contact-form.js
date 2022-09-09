import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  );

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
      <label className="label-text" htmlFor="email">
        Email Address
      </label>
      <input
        className="input input-bordered"
        placeholder="email Address"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="label-text" htmlFor="email">
        Message
      </label>
      <textarea
        className="textarea textarea-bordered"
        placeholder="message"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="btn btn-secondary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
