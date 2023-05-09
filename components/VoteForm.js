import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export default function VoteForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [vote, setVote] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const schema = Yup.object().shape({
    vote: Yup.string().required("Ton vote est requis"),
    email: Yup.string()
      .email("Courriel invalide")
      .required("Ton courriel est requis"),
  });

  useEffect(() => {
    if (email) {
      setCanSubmit(true);
    }
  }, [email]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (succeeded) {
    return <p>Merci d´avoir soumis votre candidature.</p>;
  }

  async function handleOnSubmit() {
    const formData = {};

    formData["email"] = email;
    formData["vote"] = vote;
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
      <span className="pb-2">Vote pour ton boy préféré.</span>
      <div className="font-bold text-red-700">
        Tu dois fournir ton courriel pour voter.
      </div>
      <div className="flex items-center">
        <input
          {...register("vote")}
          type="radio"
          name="vote"
          value={"Alexandre"}
          className="radio radio-secondary"
          onChange={(e) => {
            setVote(e.target.value);
          }}
        />
        <span className="pl-2">Alexandre</span>
      </div>
      <div className="flex items-center">
        <input
          {...register("vote")}
          type="radio"
          name="vote"
          value={"Julien"}
          className="radio radio-secondary"
          onChange={(e) => {
            setVote(e.target.value);
          }}
        />
        <span className="pl-2">Julien</span>
      </div>
      <span className="text-red-700">{errors.vote && errors.vote.message}</span>
      <input
        {...register("email")}
        className={
          errors.email
            ? "input input-bordered placeholder-red-700"
            : "input input-bordered"
        }
        placeholder={
          errors.email ? errors.email.message : "Quel est ton courriel?"
        }
        id="email"
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button className="btn btn-secondary" type="submit" disabled={!canSubmit}>
        Soumettre
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
              <span>Erreur! Quelque chose s´est mal passé.</span>
            </div>
          </div>
        </>
      )}
    </form>
  );
}
