import { FC, ReactNode } from "react";

import { FullPageLayout } from "./FullPageLayout";
import { SidebarLayout } from "./SidebarLayout";

type props = {
	type: LayoutType;
	children?: ReactNode;
};
type LayoutType = "sidebar" | "fullPage";

export const Layout: FC<props> = ({ type, children }) => {
	switch (type) {
		case "sidebar":
			return <SidebarLayout>{children}</SidebarLayout>;
		case "fullPage":
			return <FullPageLayout>{children}</FullPageLayout>;
	}
};
