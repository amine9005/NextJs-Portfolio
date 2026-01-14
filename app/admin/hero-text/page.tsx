import EditHeroAction from "@/components/ui/actions/forms/edit-hero/EditHeroText.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const AdminHeroPage = async () => {
  await authIsRequired();
  return <EditHeroAction />;
};

export default AdminHeroPage;
