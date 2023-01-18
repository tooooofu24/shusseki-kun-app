import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { EditSchedulePage } from "@/components/page/schedules/EditSchedulePage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>ホーム - 出席くん</title>
      </Head>
      <Layout type="sidebar">
        <Auth>
          <EditSchedulePage />
        </Auth>
      </Layout>
    </>
  );
}

export default Home;
