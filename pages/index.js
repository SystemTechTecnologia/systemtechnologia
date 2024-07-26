import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import VideoManutencao from "../components/videoManutencao";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import VideoApresentacaoSistema from "../components/videoApresentacaoSistema";

const Home = () => {
  return (
    <>
      <Head>
        <title>system tech informática - assistência técnica em informática, venda de sistemas de automação e criação de sites</title>
        <meta
          name="description"
          content="system tech informática - assistência técnica em informática, venda de sistemas de Automação e criação de sites"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefícios de escolher a System Tec Informática"
        title="nós focamos primeiramente em resolver os problemas de informática do cliente">
        system tech ti é a melhor assistência técnica em barretos-sp que você precisa para melhorar seus computadores/notebooks, para garantir o funcionamento correto de suas máquinas com garantia e segurança. caso precise de um sistema que ajude no gerenciamento do seu estabelecimento temos também a solução e se quer divulgar sua marca na internet, criamos um site com a sua cara que vai agregar muito no seu crescimento no ramo empresarial.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="video de Apresentação"
        title="sistema de automação comercial - 65,00">
        video de apresentação do sistema de automação comercial
      </SectionTitle>
      <VideoApresentacaoSistema />
      <SectionTitle
        pretitle="cases de sucesso"
        title="aqui estão alguns dos nossos clientes">
        Clientes que utilizam nosso serviço e aprovam
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Algumas perguntas frequentes">
        aqui estão algumas perguntas frequentes
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;