import { useState } from "react";
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

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    instagram: Yup.string().required("instagram is required"),
    age: Yup.string().required("age is required"),
    city: Yup.string().required("city is required"),
    job: Yup.string().required("job is required"),
    description: Yup.string().required("description is required"),
    job: Yup.string().required("job is required"),
  });

  const handleFileUpload = async (e) => {
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
        const { url } = await response.json();
        setPhoto1(url);
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
    console.log(formData);
    const result = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      setSucceeded(true);
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

      <input
        {...register("name")}
        className="input input-bordered"
        placeholder="Name"
        id="name"
        type="text"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        {...register("email")}
        className="input input-bordered"
        placeholder="Email Address"
        id="email"
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register("instagram")}
        className="input input-bordered"
        placeholder="Instagram / Facebook page address"
        id="instagram"
        type="text"
        name="instagram"
        onChange={(e) => {
          setInstagram(e.target.value);
        }}
        required
      />
      {errors.instagram && <span>{errors.instagram.message}</span>}

      <input
        {...register("age")}
        className="input input-bordered"
        placeholder="How old are you?"
        id="age"
        type="number"
        name="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        required
      />
      {errors.age && <span>{errors.age.message}</span>}

      <input
        {...register("city")}
        className="input input-bordered"
        placeholder="What city do you live in ?"
        id="city"
        type="text"
        name="city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        required
      />
      {errors.city && <span>{errors.city.message}</span>}

      <input
        {...register("job")}
        className="input input-bordered"
        placeholder="What is your job ?"
        id="job"
        type="text"
        name="job"
        onChange={(e) => {
          setJob(e.target.value);
        }}
        required
      />
      {errors.job && <span>{errors.job.message}</span>}

      <textarea
        {...register("description")}
        className="textarea textarea-bordered"
        placeholder="Describe yourself in a few words ?"
        id="description"
        name="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
      />
      {errors.description && <span>{errors.description.message}</span>}

      <input 
      {...register("photo1")}
      className="file-input file-input-bordered w-full max-w-xs"
      id="photo1"
      name="photo1"
      type="file" onChange={handleFileUpload} />
      {photo1 && (
        <p>File saved successfully.</p>
      )}
      {errors.attachment && <span>{errors.attachment.message}</span>}

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
