import { ReactNode } from "react";
interface Props {
  cols?: number;

  left_span?: number;
  left_justify?: "start" | "center" | "end";
  left_align?: "start" | "center" | "end";
  left_children?: ReactNode | string;

  right_span?: number;
  right_justify?: "start" | "center" | "end";
  right_align?: "start" | "center" | "end";
  right_children?: ReactNode;
}

const Hero2Cols = ({
  cols = 10,
  left_span = 5,
  left_justify = "center",
  left_align = "center",
  left_children = "Left col",
  right_span = 5,
  right_justify = "center",
  right_align = "center",
  right_children = "Right col",
}: Props) => {
  const const_cols = `grid-cols-${cols}`;
  const const_left_span = `col-span-${left_span}`;
  const const_right_span = `col-span-${right_span}`;

  return (
    <div className="hero-section w-full h-dvh">
      <div
        className={` w-full h-full p-4 grid grid-cols-1 lg:${const_cols} gap-8 lg:gap-4`}
      >
        <div className={const_left_span}>
          <div
            className={`w-full h-full flex flex-col justify-${left_justify} items-${left_align} w-full space-y-4`}
          >
            {left_children}
          </div>
        </div>
        <div className={const_right_span}>
          <div
            className={`w-full h-full flex flex-col justify-${right_justify} items-${right_align} w-full`}
          >
            {right_children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2Cols;
