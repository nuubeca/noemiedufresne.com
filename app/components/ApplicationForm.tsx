"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { sendEmail } from "../actions/email";
import { uploadFile } from "../actions/upload";

export default function ApplicationForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [uploadingPhoto1, setUploadingPhoto1] = useState(false);
  const [uploadingPhoto2, setUploadingPhoto2] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Ton nom est requis"),
    email: Yup.string()
      .email("Courriel invalide")
      .required("Ton courriel est requis"),
    phone: Yup.string()
      .required("Ton numéro de téléphone est requis")
      .matches(/^\d*$/, "Utilise uniquement des chiffres")
      .required("Ton numéro de téléphone est requis"),
    instagram: Yup.string().required(
      "Ton nom d&apos;utilisateur Instagram est requis"
    ),
    age: Yup.string().required("Ton âge est requis"),
    city: Yup.string().required("Ta ville est requise"),
    job: Yup.string().required("Ton métier est requis"),
    description: Yup.string().required("Une description est requise"),
  });

  useEffect(() => {
    if (photo1 && photo2) {
      setCanSubmit(true);
    }
  }, [photo1, photo2]);

  const handleFileUpload1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingPhoto1(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadFile(formData);

      if (result.success && result.name) {
        setPhoto1(result.name);
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploadingPhoto1(false);
    }
  };

  const handleFileUpload2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingPhoto2(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadFile(formData);

      if (result.success && result.name) {
        setPhoto2(result.name);
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploadingPhoto2(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (succeeded) {
    return <p>Merci d&apos;avoir soumis votre candidature.</p>;
  }

  async function handleOnSubmit() {
    const formData = {
      name,
      email,
      phone,
      instagram,
      age,
      city,
      job,
      description,
      collaboType: "Candidatures",
      photo1,
      photo2,
    };

    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.success) {
        setSucceeded(true);
        setCanSubmit(true);
      } else {
        setError(true);
      }
    });
  }

  return (
    <form
      className="flex flex-col space-y-4 p-4"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <span className="pb-2">Audition video Onlyfans boy/girl</span>
      <div className="font-bold text-red-700">
        Tu dois remplir tous les champs et inclure 2 photos de toi pour pouvoir
        soumettre ta candidature.
      </div>
      <input
        {...register("name")}
        className={
          errors.name
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={errors.name ? String(errors.name.message) : "Quel est ton nom?"}
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
        placeholder={
          errors.email ? String(errors.email.message) : "Quel est ton courriel?"
        }
        id="email"
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        {...register("phone")}
        className={
          errors.phone
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={
          errors.phone ? String(errors.phone.message) : "Quel est ton numéro de téléphone?"
        }
        id="phone"
        type="number"
        name="phone"
        maxLength={10}
        onChange={(e) => {
          setPhone(e.target.value);
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
            ? String(errors.instagram.message)
            : "Quel est ton compte compte Instagram?"
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
        placeholder={errors.age ? String(errors.age.message) : "Quel est ton âge?"}
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
        placeholder={errors.city ? String(errors.city.message) : "Où habites-tu?"}
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
        placeholder={errors.job ? String(errors.job.message) : "Quel est ton métier?"}
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
            ? String(errors.description.message)
            : "Parle nous un peu de toi."
        }
        id="description"
        name="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        className="file-input file-input-bordered w-full max-w-xs"
        id="file1"
        name="file1"
        type="file"
        onChange={handleFileUpload1}
        disabled={uploadingPhoto1}
      />
      {uploadingPhoto1 && <p>Upload en cours...</p>}
      {photo1 && !uploadingPhoto1 && <p>Photo sauvegardée avec succes.</p>}
      <input
        className="file-input file-input-bordered w-full max-w-xs"
        id="file2"
        name="file2"
        type="file"
        onChange={handleFileUpload2}
        disabled={uploadingPhoto2}
      />
      {uploadingPhoto2 && <p>Upload en cours...</p>}
      {photo2 && !uploadingPhoto2 && <p>Photo sauvegardée avec succes.</p>}
      <button className="btn btn-secondary" type="submit" disabled={!canSubmit || isPending}>
        {isPending ? "Envoi en cours..." : "Soumettre"}
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
              <span>Erreur! Quelque chose s&apos;est mal passé.</span>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

