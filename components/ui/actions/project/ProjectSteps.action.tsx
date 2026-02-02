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

  return (
    <div className="w-11/12">
      <InteractiveStepper ref={stepperRef}>
        <InteractiveStepperItem>
          <InteractiveStepperTrigger disableClickToStep={true}>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Project Text</InteractiveStepperTitle>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger disableClickToStep={true}>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Project Images</InteractiveStepperTitle>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger disableClickToStep={true}>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Project Videos</InteractiveStepperTitle>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger disableClickToStep={true}>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Project Models</InteractiveStepperTitle>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger disableClickToStep={true}>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Finish</InteractiveStepperTitle>
            </div>
          </InteractiveStepperTrigger>
        </InteractiveStepperItem>

        <InteractiveStepperContent step={1}>
          <AddProjectTextAction />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={2}>
          <AddProjectImagesAction />
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
          onClick={() => stepperRef.current?.prevStep()}
        >
          Previous
        </Button>

        <Button onClick={() => stepperRef.current?.nextStep()}>Next</Button>
      </div>
    </div>
  );
};

export default ProjectSteps;
