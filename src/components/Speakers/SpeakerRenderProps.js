const SpeakersRenderProps = (props) => {
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
  return props.children({
    speakers: speakers,
  });
};

export default SpeakersRenderProps;
