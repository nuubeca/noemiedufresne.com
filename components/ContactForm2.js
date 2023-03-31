import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required").positive().integer(),
  attachment: yup.mixed().required("Attachment is required"),
});

export default function ContactForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  const handleOnSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("age", data.age);
      formData.append("attachment", data.attachment[0]);

      const result = await fetch("/api/mail2", {
        method: "POST",
        body: formData,
      });

      if (result.status === 200) {
        setSucceeded(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form
      className="flex flex-col space-y-4 p-4"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <input
        {...register("name")}
        className="input input-bordered"
        placeholder="Name"
        id="name"
        type="text"
        name="name"
        required
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        {...register("age")}
        className="input input-bordered"
        placeholder="Age"
        id="age"
        type="number"
        name="age"
        required
      />
      {errors.age && <span>{errors.age.message}</span>}

      <input
        {...register("attachment")}
        type="file"
        id="attachment"
        name="attachment"
        accept=".jpeg,.jpg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
      />
      {errors.attachment && <span>{errors.attachment.message}</span>}

      <textarea
        {...register("message")}
        className="textarea textarea-bordered"
        placeholder="Message"
        id="message"
        name="message"
        required
      />
      {errors.message && <span>{errors.message.message}</span>}

      <button className="btn btn-secondary" type="submit">
        Send
      </button>

      {error && (
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
      )}

      {succeeded && (
        <div className="alert alert-success shadow-lg">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Message sent successfully!</span>
          </div>
        </div>
      )}
    </form>
  );
}
