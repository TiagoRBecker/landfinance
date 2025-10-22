"use client";

import Link from "next/link";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message = "Olá! Gostaria de mais informações.",
  className = "",
}: WhatsAppButtonProps) {
  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, "");
  };
  const [modal, setOpenModal] = useState(false);
  const [values, setValues] = useState({
    name: "",
    course: "",
    description: "",
  });
  const createWhatsAppUrl = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = Object.values(values) as string[];
    const existValueEmpty = value.some((v) => {
      console.log(`Verificando o valor: ${v}`);
      return v === "" || v === undefined || v === null;
    });
    if (existValueEmpty)
      return alert(
        "Por favor preencha os campos corretamente para uma melhor avaliação da equipe"
      );

    const message =
      // Início da Mensagem
      `Olá, Guedes Bampi Advogados! Meu nome é ${values.name}.` +
      // Tema principal
      `Gostaria de um atendimento sobre o seguinte tema: ${values.course}.` +
      // Descrição de Ajuda (com quebra dupla para separação visual)
      `Descrição de ajuda: ${values.description}` +
      // Finalização
      `Por favor, aguardo o contato.`;
    const formattedPhone = formatPhoneNumber(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    const url = window.open(
      `https://wa.me/${formattedPhone}?text=${encodedMessage}`,
      "blank"
    );
    return url;
  };

  return (
    <div className="w-full  fixed bottom-6 left-6 z-50 flex">
      <button
        onClick={() => {
          setOpenModal(!modal);
        }}
        className={`
       
        flex items-center justify-center
        w-14 h-14 
        bg-green-500 hover:bg-green-600 
        text-white
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-110
        group
        ${className}
      `}
        aria-label="Enviar mensagem no WhatsApp"
      >
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
        </svg>

        {/* Tooltip */}
        <span
          className="
        absolute left-16 
        bg-gray-900 text-white text-sm 
        px-3 py-2 rounded-lg
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        whitespace-nowrap
        pointer-events-none
        before:content-[''] before:absolute before:right-full before:top-1/2 
        before:-translate-y-1/2 before:border-4 before:border-transparent 
        before:border-r-gray-900
      "
        >
          Fale conosco no WhatsApp
        </span>
      </button>
      {modal && (
        <div className="w-[300px] h-[300px] bg-white absolute left-15 -top-70 rounded-md ">
          <form
            className="p-4 flex-col flex gap-3"
            onSubmit={createWhatsAppUrl}
          >
            <input
              name="name"
              value={values.name}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              type="text"
              className="w-full h-8 outline-none border-[1px] border-gray-400 rounded-md pl-3 placeholder:text-[10px]"
              placeholder="Nome"
            />
            <input
              name="course"
              value={values.course}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              type="text"
              className="w-full h-8 outline-none border-[1px] border-gray-400 rounded-md pl-3 placeholder:text-[10px]"
              placeholder="Em que ano começou a cobrança equalo tipo de dívida em questão?"
            />
            <textarea
              name="description"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              className="w-full  outline-none border-[1px] resize-none h-[130px] border-gray-400 rounded-md pl-3 placeholder:text-[10px]"
              maxLength={120}
              placeholder="Descriçao resumo"
            />

            <button
              type="submit"
              className={`
        roudend-md
        flex items-center justify-center
        w-full
        bg-green-500 
        hover:bg-green-600 
        text-white
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-110
      
       
      `}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
