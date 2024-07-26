import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "vocês consertam computadores e notebooks?",
    answer: "sim, prestamos serviços em computadores e notebooks",
  },
  {
    question: "o sistema de vocês é completo, com módulo fiscal?",
    answer: "sim, nosso sistema pode ser utilizado para Controle de Estoque, Controle de Vendas, Controle de Ordem de Serviços, Orçamentos, Emissão de Cupoms Fiscais, Emissão de NFE entre mais funcionalidades",
  },
  {
    question: "vocês não cobram mensalidade para deixar o site online igual os outros desenvolvedores?",
    answer:
      "sim, nosso site é feito com uma tecnologia nova, não necessitando de compra de hospedagem, oque diminui o custo de desenvolvimento, melhorando o custo benefício para o cliente",
  },
  {
    question: "vocês possuem parceria com alguma outra empresa?",
    answer:
      "sim, temos parceria com a NetSolutions - Soluções em Informática",
  },
];

export default Faq;