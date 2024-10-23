import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";

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
       title="Animes Gratis">  
       </SectionTitle>

       <SectionTitle
       pretitle="Naruto Shipudden">
       <a href='/animesgratuitos/narutin'>Assistir Naruto Shipudden</a>
      </SectionTitle>

      
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;