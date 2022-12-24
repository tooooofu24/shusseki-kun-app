import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { SettingPage } from "@/components/page/settings/SettingPage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>設定 - 出席くん</title>
      </Head>
      <Layout type="sidebar">
        <Auth>
          <SettingPage />
        </Auth>
      </Layout>
    </>
  );
}

export default Home;
