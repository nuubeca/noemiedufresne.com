import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ContactForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Your email is required"),
    instagram: Yup.string().required("Your instagram user is required"),
    age: Yup.string().required("Your age is required"),
    city: Yup.string().required("Your city is required"),
    job: Yup.string().required("Your job is required"),
    description: Yup.string().required("A description is required"),
  });

  useEffect(() => {
    if (photo1 && photo2) {
      setCanSubmit(true);
    }
  }, [photo1, photo2]);

  const handleFileUpload1 = async (e) => {
    const file = e.target.files[0];

    // Create a new FormData object
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { name } = await response.json();
        setPhoto1(name);
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileUpload2 = async (e) => {
    const file = e.target.files[0];

    // Create a new FormData object
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { name } = await response.json();
        setPhoto2(name);
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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

  async function handleOnSubmit() {
    const formData = {};

    formData["name"] = name;
    formData["email"] = email;
    formData["instagram"] = instagram;
    formData["age"] = age;
    formData["city"] = city;
    formData["job"] = job;
    formData["description"] = description;
    formData["collaboType"] = "Candidatures";
    formData["photo1"] = photo1;
    formData["photo2"] = photo2;
    console.log(formData);
    const result = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      setSucceeded(true);
      setCanSubmit(true);
    } else {
      setError(true);
    }
  }

  return (
    <form
      className="flex flex-col space-y-4 p-4"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <span className="pb-2">Audition for boy/girl Onlyfan video</span>
      <div className="font-bold text-red-700">
        You need to fill all fields and include 2 pictures of you to be able to
        submit your application.
      </div>
      <input
        {...register("name")}
        className={
          errors.name
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={errors.name ? errors.name.message : "What's your name?"}
        id="name"
        type="text"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        {...register("email")}
        className={
          errors.email
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={errors.email ? errors.email.message : "What's your email?"}
        id="email"
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        {...register("instagram")}
        className={
          errors.instagram
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={
          errors.instagram
            ? errors.instagram.message
            : "What's your instagram user ?"
        }
        id="instagram"
        type="text"
        name="instagram"
        onChange={(e) => {
          setInstagram(e.target.value);
        }}
      />
      <input
        {...register("age")}
        className={
          errors.age
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={errors.age ? errors.age.message : "How old are you ?"}
        id="age"
        type="number"
        name="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        {...register("city")}
        className={
          errors.city
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={errors.city ? errors.city.message : "Where do you live ?"}
        id="city"
        type="text"
        name="city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <input
        {...register("job")}
        className={
          errors.job
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={errors.job ? errors.job.message : "What's your job ?"}
        id="job"
        type="text"
        name="job"
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <textarea
        {...register("description")}
        className={
          errors.description
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={
          errors.description
            ? errors.description.message
            : "Tell us about yourself"
        }
        id="description"
        name="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        {...register("file1")}
        className="file-input file-input-bordered w-full max-w-xs"
        id="file1"
        name="file1"
        type="file"
        onChange={handleFileUpload1}
      />
      {photo1 && <p>File saved successfully.</p>}
      <input
        {...register("file2")}
        className="file-input file-input-bordered w-full max-w-xs"
        id="file2"
        name="file2"
        type="file"
        onChange={handleFileUpload2}
      />
      {photo2 && <p>File saved successfully.</p>}
      <button className="btn btn-secondary" type="submit" disabled={!canSubmit}>
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
