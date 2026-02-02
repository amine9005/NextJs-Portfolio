"use client";
import AddProjectAction from "@/components/ui/actions/project/AddProject.action";
import ProjectSteps from "@/components/ui/actions/project/ProjectSteps.action";

import FormLayout from "@/components/ui/layouts/Form.layout";
import { authIsRequired } from "@/helpers/authHelper.helper";

const LogoPage = () => {
  // await authIsRequired();
  return (
    <FormLayout>
      <ProjectSteps />
    </FormLayout>
  );
};

export default LogoPage;
