import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { useIsSmartPhoneScreen } from "@/utils/responsive";

import { Sidebar } from "../parts/navigation/Sidebar";

type props = {
	children: ReactNode;
};
export const SidebarLayout: FC<props> = ({ children }) => {
	if (useIsSmartPhoneScreen()) {
		return (
			<Box sx={{ "@media screen and (min-width: 900px)": { display: "none" } }}>
				{/* <NavBar /> */}
				<Box pt="50px">
					<Box p="1.15rem">{children}</Box>
				</Box>
			</Box>
		);
	} else {
		return (
			<Box sx={{ "@media screen and (max-width: 900px)": { display: "none" } }}>
				<Sidebar />
				<Box pl="200px">
					<Box p="30px">{children}</Box>
				</Box>
			</Box>
		);
	}
};
