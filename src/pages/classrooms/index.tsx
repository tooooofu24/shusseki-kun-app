import Head from "next/head";

import { Auth } from "@/components/functional/authentication/Auth";
import { ClassroomListPage } from "@/components/page/classrooms/ClassroomListPage";
import { Layout } from "@/components/ui/layouts/Layout";

function Home() {
	return (
		<>
			<Head>
				<title>クラス一覧 - 出席くん</title>
			</Head>
			<Layout type="sidebar">
				<Auth>
					<ClassroomListPage />
				</Auth>
			</Layout>
		</>
	);
}

export default Home;
