import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { useDataContext } from "../../context/language";
import { text } from "../../data/data";

const Error = () => {
  const { lan } = useDataContext();
  return <div className="text-red-500 text-sm">{text[lan].required}</div>;
};

const Form = () => {
  const { lan } = useDataContext();
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    const sender = {
      to: " ",
      from: "no-reply@gloriasilvaphoto.com",
      from_name: "Gloria Silva Photo",
      subject: "Contacto",
    };

    axios
      .post("http://gloriasilvaphoto.com/backend/send-email.php", { ...data, ...sender })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  return (
    <>
      {error ? (
        <span className="text-xl">{text[lan].error}</span>
      ) : sended ? (
        <span className="text-xl">{text[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <div>
              <label className="mb-1 block text-sm">{text[lan].name}</label>
              <input {...register("name", { required: true })} className="w-full h-11 p-3 border" />
              {errors.name && <Error />}
            </div>
            <div>
              <label className="mb-1 block text-sm">{text[lan].email}</label>
              <input {...register("email", { required: true })} className="w-full h-11 p-3 border" />
              {errors.email && <Error />}
            </div>

            <div>
              <label className="mb-1 block text-sm">{text[lan].message}</label>
              <textarea cols="30" rows="3" {...register("message", { required: true })} className="w-full p-3 border" />
              {errors.message && <Error />}
            </div>
            <div>{sending ? <BeatLoader /> : <button className="bg-primary text-white px-10 py-3 text-sm inline-block hover:shadow-lg">{text[lan].send}</button>}</div>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
