import Video from "next-video";
import awesomeVideo from "@/uploads/mainVid.mp4";

const HeroVideoMolecule = () => {
  return (
    <Video
      className="rounded-lg bg-gray-300 object-cover w-auto sm:w-140 h-auto"
      width={720}
      height={480}
      preload="true"
      muted
      src={awesomeVideo}
    ></Video>

    // <iframe
    //   className="rounded-lg bg-gray-300 object-cover w-auto sm:w-140 h-100"
    //   width={720}
    //   height={480}
    //   // src={`https://www.youtube.com/embed/${embedId}`}
    //   src={`https://drive.google.com/file/d/1Wiq0rwCcI23Bmt2NcRd87hdppXafVAhN/preview`}
    //   allowFullScreen
    //   title="Embedded Youtube Video"
    // />
  );
};

export default HeroVideoMolecule;
