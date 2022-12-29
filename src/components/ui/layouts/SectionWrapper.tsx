import { Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const SectionWrapper: FC<FlexProps> = ({ children, ...props }) => {
	return (
		<Flex flexDirection="column" gap="20px" {...props}>
			{children}
		</Flex>
	);
};
