import type { NextPage } from "next";
import Head from "next/head";

import { LoginPage } from "@/components/page/login/LoginPage";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>ログイン - 出席くん</title>
      </Head>
      <LoginPage />
    </>
  );
};

export default Page;
