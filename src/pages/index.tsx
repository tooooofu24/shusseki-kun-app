import Head from "next/head";

import { HomePage } from "@/components/page/index/HomePage";

function Home() {
  return (
    <>
      <Head>
        <title>ホーム - 出席くん</title>
      </Head>
      <HomePage />
    </>
  );
}

export default Home;
