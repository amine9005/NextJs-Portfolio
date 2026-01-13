import Image from "next/image";
import { CSSProperties } from "react";

interface Props {
  imageUrl: string;
  leftColor: string;
  rightColor: string;
  name: string;
  useImage: boolean;
}

const LogoWithNameMolecule = ({
  imageUrl,
  leftColor,
  rightColor,
  name,
  useImage,
}: Props) => {
  const spanStyle: CSSProperties = {
    backgroundImage: `linear-gradient(0.25turn, ${leftColor},  ${rightColor})`,
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="flex justify-start items-center bg-linear-to">
      {" "}
      {useImage && (
        <Image
          src={imageUrl}
          alt="logo"
          width={24}
          height={24}
          className="mr-3"
        />
      )}
      <span style={spanStyle}>{name}</span>
    </div>
  );
};

export default LogoWithNameMolecule;
