import AddProjectAction from "@/components/ui/actions/project/AddProject.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const LogoPage = async () => {
  // await authIsRequired();
  return <AddProjectAction />;
};

export default LogoPage;
