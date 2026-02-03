"use client";

import {
  InteractiveStepper,
  InteractiveStepperContent,
  InteractiveStepperDescription,
  InteractiveStepperIndicator,
  InteractiveStepperItem,
  InteractiveStepperSeparator,
  InteractiveStepperTitle,
  InteractiveStepperTrigger,
  IStepperMethods,
} from "@/components/ui/atoms/stepper/Stepper.atom";
import { useRef } from "react";
import { Button } from "../../atoms/button/button";
import AddProjectImagesAction from "./forms/AddProjectImages.action";
import AddProjectTextAction from "./forms/AddProjectText.action";
import FormLayout from "../../layouts/Form.layout";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="w-full rounded-lg border border-gray-700 bg-gray-900 p-4">
    <span className="font-semibold text-gray-300">{title}</span>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const ProjectSteps = () => {
  const stepperRef = useRef<HTMLDivElement & IStepperMethods>(null);
  const addProjectSteps = [
    {
      title: "Project Text",
      description: "",
    },
    {
      title: "Project Images",
      description: "",
    },
    {
      title: "Project Videos",
      description: "",
    },
    {
      title: "Project Models",
      description: "",
    },
    {
      title: "Finish",
      description: "",
    },
  ];

  const itemRefs = useRef<HTMLDivElement[] | null>([]);

  return (
    <div className="flex justify-center">
      <div className="w-11/12 max-w-4xl">
        <InteractiveStepper ref={stepperRef}>
          {addProjectSteps.map((value, index) => (
            <InteractiveStepperItem
              key={index}
              ref={(el) => {
                if (itemRefs.current) {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }
              }}
            >
              <InteractiveStepperTrigger disableClickToStep={true}>
                <InteractiveStepperIndicator />
                <div>
                  <InteractiveStepperTitle>
                    {value.title}
                  </InteractiveStepperTitle>
                </div>
              </InteractiveStepperTrigger>
              <InteractiveStepperSeparator />
            </InteractiveStepperItem>
          ))}

          <InteractiveStepperContent
            step={1}
            className="flex justify-center items-center"
          >
            <AddProjectTextAction stepperRef={stepperRef} />
          </InteractiveStepperContent>

          <InteractiveStepperContent step={2}>
            <AddProjectImagesAction stepperRef={stepperRef} />
          </InteractiveStepperContent>

          <InteractiveStepperContent step={3}>
            <Card
              title={"Skipped"}
              description={"This should not be seen because it is disabled"}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent step={4}>
            <Card
              title={"Order Shipped"}
              description={"Shipped to your location"}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent step={5}>
            <Card
              title={"Order Delivered"}
              description={"Delivered to your location"}
            />
          </InteractiveStepperContent>
        </InteractiveStepper>

        <div className="mt-4 flex justify-between gap-2">
          <Button
            variant={"outline"}
            onClick={() => {
              const index = stepperRef.current!.currentStep - 1;
              stepperRef.current?.goToStep(index);
              if (itemRefs.current) {
                itemRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
              }
            }}
          >
            Previous
          </Button>

          <Button
            onClick={() => {
              if (itemRefs.current) {
                const currentStep = stepperRef.current?.currentStep || 1;
                const totalSteps = stepperRef.current?.totalSteps || 1;
                let index = currentStep + 1;
                if (currentStep + 1 > totalSteps) {
                  index = totalSteps;
                }
                // console.log("index ",
                // index);
                stepperRef.current?.goToStep(index);
                if (itemRefs.current) {
                  itemRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                }
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;
