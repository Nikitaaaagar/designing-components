import React from "react";
import { SpeakerContextNew } from "../../pages/speakers";
import SpeakerSearchBar from "../SpeakerSearchBar/SpeakerSearchBar";
import Speaker from "../Speaker/Speaker";
import withRequest from "../HOCs/withRequest";
//For render props
// import SpeakersRenderProps from "./SpeakerRenderProps";

//Example for HOCS
// import withData from "./withData";

// const Speakers = ({ speakers }) => {
//   return (
//     <div>
//       {speakers.map(({ imgSrc, name }) => {
//         // const { imgSrc, name } = speaker;
//         return <img src={`/images/${imgSrc}.png`} alt={name} key={imgSrc} />;
//       })}
//     </div>
//   );
// };

// const maxSpeakersToShow = 2;
// export default withData(maxSpeakersToShow)(Speakers);

//Example for Render Props
// const Speakers = () => {
//   return (
//     <SpeakersRenderProps>
//       {({ speakers }) => {
//         return (
//           <div>
//             {speakers.map(({ imgSrc, name }) => {
//               // const { imgSrc, name } = speaker;
//               return (
//                 <img src={`/images/${imgSrc}.png`} alt={name} key={imgSrc} />
//               );
//             })}
//           </div>
//         );
//       }}
//     </SpeakersRenderProps>
//   );
// };

//Example for Context API

// const Speakers = () => {
//   const speakers = React.useContext(SpeakerContextNew);
//   return (
//     <div>
//       {speakers.map(({ imgSrc, name }) => {
//         // const { imgSrc, name } = speaker;
//         return <img src={`/images/${imgSrc}.png`} alt={name} key={imgSrc} />;
//       })}
//     </div>
//   );
// };

const Speakers = () => {
  const speakersArray = [
    {
      imageSrc: "Speaker-1124",
      name: "Douglas Crockford",
      id: 1124,
      firstName: "Douglas",
      lastName: "Crockford",
      sat: true,
      sun: false,
      isFavorite: false,
      bio:
        "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.",
    },
    {
      imageSrc: "Speaker-1269",
      name: "Tamara Baker",
      id: 1269,
      firstName: "Tamara",
      lastName: "Baker",
      sat: false,
      sun: true,
      isFavorite: true,
      bio:
        "Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.",
    },
    {
      imageSrc: "Speaker-10803",
      name: "Eugene Chuvyrov",
      id: 10803,
      firstName: "Eugene",
      lastName: "Chuvyrov",
      sat: true,
      sun: false,
      isFavorite: false,
      bio:
        "Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.",
    },
  ];
  const [searchQuery, setSearchQuery] = React.useState("");
  const [speakers, setSpeakers] = React.useState(speakersArray);

  function toggleSpeakerFavorite(speakerRec) {
    return {
      ...speakerRec,
      isFavorite: !speakerRec.isFavorite,
    };
  }

  function onFavoriteToggleHandler(speakerRec) {
    const toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);
    const speakerIndex = speakers
      .map((speaker) => speaker.id)
      .indexOf(speakerRec.id);
    setSpeakers([
      ...speakers.slice(0, speakerIndex),
      toggledSpeakerRec,
      ...speakers.slice(speakerIndex + 1),
    ]);
  }

  return (
    <div>
      <SpeakerSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {speakers
          .filter((rec) => {
            const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
            return searchQuery.length === 0
              ? true
              : targetString.includes(searchQuery.toLowerCase());
          })
          .map((speaker) => (
            <Speaker
              key={speaker.id}
              {...speaker}
              onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}
            />
          ))}
      </div>
    </div>
  );
};

export default withRequest()(Speakers);
