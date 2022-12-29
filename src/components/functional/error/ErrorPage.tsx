import { Button, Card, CardBody, Flex, Square, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowClockwise, ChatsCircle, WarningCircle } from "phosphor-react";
import { FC } from "react";

import { Illustration } from "@/components/ui/parts/Illustration";
import { PageTitle } from "@/components/ui/parts/PageTitle";

type props = {
	error: Error;
	resetErrorBoundary: () => void;
};

export const ErrorPage: FC<props> = () => {
	const router = useRouter();
	const onReload = () => {
		router.reload();
	};
	const onContact = () => {
		router.push("/contact");
	};
	return (
		<>
			<PageTitle title="エラーが発生しました" icon={<WarningCircle />} />
			<Card>
				<CardBody>
					<Flex justifyContent="center">
						<Square size="200px" maxWidth="100%">
							<Illustration />
						</Square>
					</Flex>
					<Text textAlign="center">
						ページの読み込み中にエラーが発生しました。
						ページの再読み込みをお試し下さい。
						<br />
						※再読み込みをしても直らない場合、下記ボタンよりお問合せ下さい。
					</Text>
					<Flex pt={8} pb={5} gap={8} justifyContent="center">
						<Button leftIcon={<ArrowClockwise />} onClick={onReload}>
							再読み込み
						</Button>
						<Button
							variant="outline"
							leftIcon={<ChatsCircle />}
							onClick={onContact}
						>
							お問合せ
						</Button>
					</Flex>
				</CardBody>
			</Card>
		</>
	);
};
