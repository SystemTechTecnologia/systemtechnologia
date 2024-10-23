import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

import { benefitOne, benefitTwo } from "../../components/data";
import VideoEmissaoNFE from "../../components/videoEmissaoNFE";
import VideoCadastroClientes from "../../components/videoCadastroClientes";
import VideoCadastroProdutos from "../../components/videoCadastroProdutos";
import VideoPerfilFiscal from "../../components/videoPerfilFiscal";
import VideoPromissoria from "../../components/videoPromissoria";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";

import VideoNarutoOne from "../../components/narutin/videoNarutoOne";


const Home = () => {
  return (
    <>
      <Head>
        <title>System Tech - Assistência Técnica</title>
        <meta
          name="description"
          content="System Tech - Assistência Técnica"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

       <SectionTitle
       pretitle="Naruto Shipudden"
       title="Naruto Shipudden">
      
       <a href='/animesgratuitos/narutin'>Assistir Naruto Shipudden</a>

      </SectionTitle>

      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;