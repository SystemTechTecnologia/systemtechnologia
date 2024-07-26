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
  title: "alguns dos benefícios de escolher a aystem Tec Informática",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "assistência técnica em barretos-sp a domicílio",
      desc: "não precisa trazer seu aparelho até nós, nossa assistência técnica vai até você",
      icon: <FaceSmileIcon />,
    },
    {
      title: "sistema de automação nota 10 avaliado pelos clientes",
      desc: "temos mais de 500 clientes que utilizam nosso sistema pelo Brasil e com a comprovação que sistemas melhoram o ambiente de trabalho tanto na agilidade como também na organização do Comércio",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "sites rápidos, seguros e com um preço que cabe no seu bolso",
      desc: "nossos sites são feitos com as mais novas tecnologias, prezando melhor desempenho e custo benefício",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "mais alguns benefícios da system tech ti",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "atendemos todo tipo de cliente, independente de idade ou equipamento",
      desc: "temos clientes desde jovens iniciantes a gente da melhor idade, e atendemos a todos com paciência e entendimento",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "suporte nível A para te atender da melhor forma possível",
      desc: "nossa equipe de suporte é muito bem avaliada pelos clientes e está sempre disposta a lhes atender com dedicação e comprometimento",
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
