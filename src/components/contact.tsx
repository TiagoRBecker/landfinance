"use client";
import { useState } from "react";
import { landContent } from "./mocks";
import Swal from "sweetalert2";

const Contact = () => {
  const [errors, setErrors] = useState<null | any>({});
  const [pending, setPending] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Campo é obrigatório";
        break;
      case "email":
        if (!value.trim()) return "Campo é obrigatório";
        if (!validateEmail(value)) return "Email inválido";
        break;
      case "course":
        if (!value.trim()) return "Selecione uma área";
        break;
      case "phone":
        if (!value.trim()) return "Campo é obrigatório";
        break;

      default:
        return "";
    }
    return "";
  };
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Validação em tempo real (opcional)
    if (errors[name]) {
      const error = validateField(name, value);

      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    const newErrors: Partial<Record<keyof typeof values, string>> = {};

    (Object.keys(values) as Array<keyof typeof values>).forEach((key) => {
      const error = validateField(key, values[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const res = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (res.ok) {
        await Swal.fire(
          "Obrigado pelo seu contato! ",
          "Em breve, um de nossos profissionais entrará em contato para ajudá-lo com sua solicitação",
          "success"
        );

        setValues({
          name: "",
          email: "",
          phone: "",

          course: "",
        });
        setPending(false);
        return;
      }
    }
    setPending(false);
    return;
  };
  return (
    <form
      className="w-full h-full p-2  rounded-md flex flex-col gap-6  items-center justify-center  bg-black/60 backdrop-blur-none lg:p-10 lg:rounded-3xl"
      onSubmit={handleSubmit}
    >
      <h2 className=" block text-white text-3xl ">Nós podemos ajudar você, entre em contato</h2>
        <div className="relative w-full">
      <input
        value={values.name}
        onChange={handleChange}
        name="name"
        type="text"
        className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5"
        placeholder="Nome"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1 ml-4 absolute">{errors.name}</p>
      )}
      </div>
  <div className="relative w-full">
      <input
        name="email"
        type="text"
        className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1 ml-4 absolute">{errors.email}</p>
      )}

</div>
  <div className="relative w-full">
      <input
        name="phone"
        type="text"
        className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5"
        placeholder="Telefone"
        value={values.phone}
        onChange={handleChange}
      />
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1 ml-4 absolute">{errors.phone}</p>
      )}
      </div>
  <div className="relative w-full">
      <input
        name="course"
        type="text"
        className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5 "
         placeholder="Em que ano começou a cobrança e qual o tipo de dívida em questão?"
        value={values.course}
        onChange={handleChange}
      />
      {errors.course && (
        <p className="text-red-500 text-sm mt-1 ml-4 min-h-[10xp]">{errors.course}</p>
      )}
      </div>

      <button
        type={pending ? "button" : "submit"}
        className="w-full py-4 bg-bgBtn text-white "
      >
        {pending ? "Aguarde enviando ..." : "Agende consulta"}
      </button>
    </form>
  );
};

export default Contact;
