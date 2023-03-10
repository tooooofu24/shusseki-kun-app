import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { HomePage } from "@/components/page/index/HomePage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>ホーム - 出席くん</title>
      </Head>
      <Layout type="sidebar">
        <Auth>
          <HomePage />
        </Auth>
      </Layout>
    </>
  );
}

export default Home;
