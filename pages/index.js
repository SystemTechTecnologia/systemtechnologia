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
        <title>system tech manutenções - assistência técnica</title>
        <meta
          name="description"
          content="system tech manutenções"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="orçamento gratuito e acessivel"
        title="espaco para anuncio">
        Manutenção <br></br>
        Atualização <br></br>
        Suporte <br></br>
        Criação de Sites<br></br>

      </SectionTitle>
      <Benefits data={benefitOne}/>
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
        clientes que utilizam nosso serviço e aprovam
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