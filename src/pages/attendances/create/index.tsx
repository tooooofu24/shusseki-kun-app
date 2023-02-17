import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { AttendanceCreatePage } from "@/components/page/attendances/AttendanceCreatePage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>出席登録 - 出席くん</title>
      </Head>
      <Layout type="sidebar">
        <Auth>
          <AttendanceCreatePage />
        </Auth>
      </Layout>
    </>
  );
}

export default Home;
