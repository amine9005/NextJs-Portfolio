"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { FormEvent } from "react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButton from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import EditLogoFormContent from "@/components/ui/organisms/contents/edit-logo/EditLogo.content";
import { LogoFormType } from "@/validations/logo.zod";
import LogoWithNameMolecule from "@/components/ui/molecules/logo-with-name/LogoWithName.molecule";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: LogoFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
  filePath: FileList | null;
  setFilePath: (files: FileList | null) => void;
}

const EditLogoCard = ({
  form,
  card,
  formName,
  handle_submit,
  loading,
  filePath,
  setFilePath,
}: Props) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          <H2 size={"xl"}>
            <LogoWithNameMolecule
              useImage={form.watch("useImage")}
              imageUrl="/vercel.svg"
              leftColor={form.watch("leftColor")}
              rightColor={form.watch("rightColor")}
              name={form.watch("fullName")}
            />
          </H2>
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <EditLogoFormContent
          form={form}
          formName={formName}
          handle_submit={handle_submit}
          filePath={filePath}
          setFilePath={setFilePath}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-center items-center w-full">
          <LoadingSubmitButton
            width={"full"}
            loading={loading}
            formName={formName}
          >
            Update Logo And Title
          </LoadingSubmitButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EditLogoCard;
