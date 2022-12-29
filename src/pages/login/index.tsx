import type { NextPage } from "next";
import Head from "next/head";

import { LoginPage } from "@/components/page/login/LoginPage";
import { Layout } from "@/components/ui/layouts/Layout";

const Page: NextPage = () => {
	return (
		<>
			<Head>
				<title>ログイン - 出席くん</title>
			</Head>
			<Layout type="fullPage">
				<LoginPage />
			</Layout>
		</>
	);
};

export default Page;
