import { Text, TextProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, ReactNode } from "react";

import { colors } from "@/config/color/color";

type props = {
	href: string;
	children?: ReactNode | ReactNode[];
} & TextProps;
export const Link: FC<props> = ({ href, children, ...props }) => {
	return (
		<Text
			as="span"
			color={colors.primary}
			_hover={{ textDecoration: "underline" }}
			{...props}
		>
			<NextLink href={href}>{children}</NextLink>
		</Text>
	);
};
