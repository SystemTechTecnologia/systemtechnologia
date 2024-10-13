import Head from "next/head";
import Hero from "../../components/herolinks";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";

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
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;