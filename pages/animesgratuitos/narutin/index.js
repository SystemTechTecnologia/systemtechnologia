import Head from "next/head";
import Navbar from "../../../components/navbar";
import SectionTitle from "../../../components/sectionTitle";
import Footer from "../../../components/footer";
import Cta from "../../../components/cta";
import PopupWidget from "../../../components/popupWidget";

import VideoNarutoOne from "../../../components/narutinVideos/videoNarutoOne";
import VideoNarutoTwo from "../../../components/narutinVideos/videoNarutoTwo";

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
       title="Naruto Shipudden">    
      </SectionTitle>
       <SectionTitle
       pretitle="Naruto Shipudden - EP1">    
      </SectionTitle>
      <VideoNarutoOne />

      <SectionTitle
       pretitle="Naruto Shipudden - EP2">    
      </SectionTitle>
      <VideoNarutoTwo />

      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;