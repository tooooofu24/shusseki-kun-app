import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { UserListPage } from "@/components/page/users/UserListPage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>ユーザー一覧 - 出席くん</title>
      </Head>
      <Layout type="sidebar">
        <Auth>
          <UserListPage />
        </Auth>
      </Layout>
    </>
  );
}

export default Home;
