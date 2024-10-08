import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "aceitamos parcerias com trabalho social",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "assistência técnica em barretos-sp a domicílio",
      desc: "conferir disponibilidade de horário",
      icon: <FaceSmileIcon />,
    },
    {
      title: "sistema de automação comercial em parceria com uma das melhores software house da região",
      desc: "disponibilizamos acesso ao nosso sistema de automacao comercial para pequenas e grandes empresas e empresário(a)s, sistema ja consagrado no mercado e com muitas parcerias que deram certo",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "seu celular não esta com bom funcionamento?nos chame no whatsapp que resolvemos no mesmo dia conforme horário",
      desc: "System Tech, desde 2022 se especializando cada vez mais para melhor atende-los",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "mais alguns benefícios da system tech",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "espaco para anuncio",
      desc: "pc ou notebook lento?celular está com algum probleminha?a system tech resolve",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "suporte nível A para te atender da melhor forma possível",
      desc: "espaco para anuncio",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "sites com hospedagem gratuíta",
      desc: "nossos sites diferente da maioria dos outros, é hospedado sem a necessidade de aluguel de hospedagem, melhorando o custo benefício, sem interferir na performance ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
