import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function ContactForm() {
  
  const [contentCollab, setContentCollab] = useState(false);

  const radioHandler = (status) => {
    setContentCollab(status);
  };

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  );

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
      <span className="pb-2">Collaboration request</span>

      <input
        className="input input-bordered"
        placeholder="Name"
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <input
        className="input input-bordered"
        placeholder="Email Address"
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div>
        <input
          type="radio"
          id="brand"
          name="collaboType"
          value="brand"
          className="accent-fuchsia-600"
          defaultChecked={true}
          onChange={(e) => radioHandler(false)}
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
          onChange={(e) => radioHandler(true)}
        />
        <label htmlFor="content">Content collaboration</label>
      </div>

      {contentCollab && (
        <>
          <input
            className="input input-bordered"
            placeholder="Instagram page address"
            id="instagram"
            type="text"
            name="instagram"
            required
          />
          <ValidationError
            prefix="Instagram"
            field="instagram"
            errors={state.errors}
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
