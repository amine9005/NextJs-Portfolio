import { Label } from "@/components/ui/atoms/label/label";
import ColorPickerDialog from "@/components/ui/organisms/dialog/color-picker/ColorPicker.dialog";

interface Props {
  name: string;
  setColorFn: (color: string) => void;
  color: string;
}

const ColorPickerMolecule = ({ name, setColorFn, color }: Props) => {
  console.log("color: ", color);

  return (
    <div className="flex justify-start items-center gap-2">
      <Label htmlFor={name}>{name}:</Label>
      <Label htmlFor={name} style={{ color: color }}>
        {color}
      </Label>
      <ColorPickerDialog
        title={name + " Color"}
        color={color}
        setColorFn={setColorFn}
      />
    </div>
  );
};

export default ColorPickerMolecule;
