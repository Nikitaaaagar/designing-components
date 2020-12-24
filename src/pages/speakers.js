import React from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import SpeakerSearchBar from "../components/SpeakerSearchBar/SpeakerSearchBar";
import Speakers from "../components/Speakers/Speaker";
import Footer from "../components/Footer/Footer";

export const SpeakerContextNew = React.createContext({});
function SpeakersNew() {
  const speakers = [
    {
      imgSrc: "speaker-component-1124",
      name: "Douglas",
    },
    {
      imgSrc: "speaker-component-1530",
      name: "Tamara Baker",
    },
    {
      imgSrc: "speaker-component-10803",
      name: "Eugene",
    },
  ];
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContextNew.Provider value={speakers}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContextNew.Provider>
      <Footer />
    </div>
  );
}

export default SpeakersNew;
