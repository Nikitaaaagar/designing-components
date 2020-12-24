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

const Speakers = () => {
  const speakers = React.useContext(SpeakerContextNew);
  return (
    <div>
      {speakers.map(({ imgSrc, name }) => {
        // const { imgSrc, name } = speaker;
        return <img src={`/images/${imgSrc}.png`} alt={name} key={imgSrc} />;
      })}
    </div>
  );
};

export default Speakers;
