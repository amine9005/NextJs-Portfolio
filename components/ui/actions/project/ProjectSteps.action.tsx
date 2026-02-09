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
import { Button } from "@/components/ui/atoms/button/button";
import AddProjectImagesAction from "./forms/AddProjectImages.action";
import AddProjectTextAction from "./forms/AddProjectText.action";
import AddProjectVideosAction from "./forms/AddProjectVideos.action";
import AddProjectModelsAction from "./forms/AddProjectModels.action";
import AddProjectSettingsAction from "./forms/AddProjectSetting.action";

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

  const nextStep = () => {
    if (itemRefs.current) {
      const currentStep = stepperRef.current?.currentStep || 1;
      const totalSteps = stepperRef.current?.totalSteps || 1;
      let index = currentStep + 1;
      if (currentStep + 1 > totalSteps) {
        index = totalSteps;
      }
      stepperRef.current?.goToStep(index);
      if (itemRefs.current) {
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  };

  const previousStep = () => {
    const currentStep = stepperRef.current?.currentStep || 1;
    let index = currentStep - 1 || 1;
    if (index === 0) {
      index = 1;
    }
    stepperRef.current?.goToStep(index);
    if (itemRefs.current) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

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
                  <InteractiveStepperDescription>
                    {value.description}
                  </InteractiveStepperDescription>
                </div>
              </InteractiveStepperTrigger>
              <InteractiveStepperSeparator />
            </InteractiveStepperItem>
          ))}

          <InteractiveStepperContent
            step={1}
            className="flex justify-center items-center"
          >
            <AddProjectTextAction nextStep={nextStep} />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={2}
            className="flex justify-center items-center"
          >
            <AddProjectImagesAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={3}
            className="flex justify-center items-center"
          >
            <AddProjectVideosAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={4}
            className="flex justify-center items-center"
          >
            <AddProjectModelsAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={5}
            className="flex justify-center items-center"
          >
            <AddProjectSettingsAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>
        </InteractiveStepper>

        <div className="mt-4 flex justify-between gap-2">
          <Button variant={"outline"} onClick={() => previousStep()}>
            Previous
          </Button>

          <Button onClick={() => nextStep()}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;
