import React from "react";
const SpeakersContext = React.createContext();

const SpeakersProvider = ({ children }) => {
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
    <SpeakersContext.Provider value={speakers}>
      {children}
    </SpeakersContext.Provider>
  );
};
export { SpeakersContext, SpeakersProvider };
