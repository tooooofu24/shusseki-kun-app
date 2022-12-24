import { Auth } from "@/components/functional/authentication/Auth";
import { Layout } from "@/components/ui/layouts/Layout";

export const HomePage = () => {
  return (
    <Auth>
      <Layout type="sidebar" />
    </Auth>
  );
};
