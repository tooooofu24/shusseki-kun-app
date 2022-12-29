import { Box } from "@chakra-ui/react";

import { NavigationContent } from "./NavigationContent";

export const Sidebar = () => {
  return (
    <Box bg="white" h="full" w="200px" position="fixed" boxShadow="base">
      <NavigationContent />
    </Box>
  );
};
