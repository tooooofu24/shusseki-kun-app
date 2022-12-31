import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { ClassroomCreatePage } from "@/components/page/classrooms/ClassroomCreatePage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>クラス登録 - 出席くん</title>
      </Head>
      <Layout type="sidebar">
        <Auth>
          <ClassroomCreatePage />
        </Auth>
      </Layout>
    </>
  );
}

export default Home;
