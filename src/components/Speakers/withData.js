const withData = (maxSpeakersToShow) => (Component) => {
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
  return () => {
    const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
    return <Component speakers={limitSpeakers}></Component>;
  };
};

export default withData;
