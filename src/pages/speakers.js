import React from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import SpeakerSearchBar from "../components/SpeakerSearchBar/SpeakerSearchBar";
import Speakers from "../components/Speakers/Speaker";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import { SpeakersProvider } from "../Contexts/SpeakersContext";

export const SpeakerContextNew = React.createContext({});
function SpeakersNew() {
  // const speakers = [
  //   {
  //     imgSrc: "speaker-component-1124",
  //     name: "Douglas",
  //   },
  //   {
  //     imgSrc: "speaker-component-1530",
  //     name: "Tamara Baker",
  //   },
  //   {
  //     imgSrc: "speaker-component-10803",
  //     name: "Eugene",
  //   },
  // ];
  return (
    // <div>
    //   <Header />
    //   <Menu />
    //   <SpeakerContextNew.Provider value={speakers}>
    //     <SpeakerSearchBar />
    //     <Speakers />
    //   </SpeakerContextNew.Provider>
    //   <Footer />
    // </div>
    <Layout>
      <SpeakersProvider>
        {/* <SpeakerSearchBar /> */}
        <Speakers />
      </SpeakersProvider>
    </Layout>
  );
}

export default SpeakersNew;
