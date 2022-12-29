import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { ContactPage } from "@/components/page/contact/ContactPage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
	return (
		<>
			<Head>
				<title>お問合せ - 出席くん</title>
			</Head>
			<Layout type="sidebar">
				<Auth>
					<ContactPage />
				</Auth>
			</Layout>
		</>
	);
}

export default Home;
