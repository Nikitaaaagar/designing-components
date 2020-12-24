import React from "react";
import { SpeakerContextNew } from "../../pages/speakers";
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
  const speakers = [
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
  return (
    <div>
      <div className="mb-6 ">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search by name"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {speakers.map(({ id, firstName, lastName, bio, isFavorite }) => (
          <div className="rounded overflow-hidden shadow-lg p-6" key={id}>
            <div className="grid grid-cols-4 mb-6">
              <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
              <div className="flex justify-end">
                <div
                  className={isFavorite ? "heartredbutton" : "heartdarkbutton"}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <img
                src={`/speakers/Speaker-${id}.jpg`}
                alt={`${firstName} ${lastName}`}
              />
            </div>
            <div className="text-gray-600">{bio.substr(0, 70) + "..."}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
