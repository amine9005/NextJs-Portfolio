import ProjectSteps from "@/components/ui/actions/project/ProjectSteps.action";

import { authIsRequired } from "@/helpers/authHelper.helper";

const EditProjectPage = async () => {
  await authIsRequired();
  return <ProjectSteps />;
};

export default EditProjectPage;
