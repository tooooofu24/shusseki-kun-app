import { FC, ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorPage } from "@/components/functional/error/ErrorPage";

import { LoadingPage } from "../loading/LoadingPage";
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
      return (
        <SidebarLayout>
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          </ErrorBoundary>
        </SidebarLayout>
      );
    case "fullPage":
      return <FullPageLayout>{children}</FullPageLayout>;
  }
};
