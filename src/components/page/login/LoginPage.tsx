import { Button, Card, CardBody, Flex } from "@chakra-ui/react";
import Router from "next/router";
import { GoogleLogo } from "phosphor-react";

import { Logo } from "@/components/ui/parts/Logo";
import { login } from "@/utils/authentication/login";

export const LoginPage = () => {
	return (
		<Card maxW="85vw" width="350px">
			<CardBody>
				<Flex
					alignItems="center"
					justifyContent="center"
					px="16px"
					gap="15px"
					py="50px"
				>
					<Logo />
				</Flex>
				<Button onClick={onClick} leftIcon={<GoogleLogo />} width="100%">
					ログイン
				</Button>
			</CardBody>
		</Card>
	);
};

const onClick = async () => {
	await login();
	Router.push("/");
};
