import { useState } from "react";

export default function ContactForm() {
  const [contentCollab, setContentCollab] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);

  if (succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  const radioHandler = (status) => {
    setContentCollab(status);
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const result = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (result.status === 200) {
      setSucceeded(true);
    } else {
      setError(true);
    }
  }

  return (
    <form className="flex flex-col space-y-4 p-4" onSubmit={handleOnSubmit}>
      <span className="pb-2">Audition for boy/girl Onlyfan video</span>
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
      <input
        className="input input-bordered"
        placeholder="Instagram / Facebook page address"
        id="instagram"
        type="text"
        name="instagram"
        required
      />
      <input
        className="input input-bordered"
        placeholder="How old are you?"
        id="age"
        type="number"
        name="age"
        required
      />
      <input
        className="input input-bordered"
        placeholder="What city do you live in ?"
        id="city"
        type="text"
        name="city"
        required
      />
      <input
        className="input input-bordered"
        placeholder="What is your job ?"
        id="job"
        type="text"
        name="job"
        required
      />
      <textarea
        className="textarea textarea-bordered"
        placeholder="Describe yourself in a few words ?"
        id="description"
        name="description"
        required
      />
      <input
        type="hidden"
        id="application"
        name="collaboType"
        value="application"
      />

      <button className="btn btn-secondary" type="submit">
        Submit
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
