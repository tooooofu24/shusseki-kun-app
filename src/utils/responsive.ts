import { useMediaQuery } from "@chakra-ui/react";

export const useIsSmartPhoneScreen = () => {
	const [isSmallerThan1000] = useMediaQuery("(max-width: 900px)");
	return isSmallerThan1000;
};

export const useIsPCScreen = () => {
	const [isLargerThan1000] = useMediaQuery("(min-width: 900px)");
	return isLargerThan1000;
};
