import Image from "next/image";

const UploadImageMolecule = ({ index }: { index: number }) => {
  return (
    <label key={index} htmlFor={`image${index}`}>
      <input
        accept="image/* application/pdf application/docx"
        type="file"
        id={`image${index}`}
        hidden
      />
      <Image
        className="max-w-24 cursor-pointer"
        src="/uploadArea.png"
        alt="uploadArea"
        width={100}
        height={100}
      />
    </label>
  );
};

export default UploadImageMolecule;
