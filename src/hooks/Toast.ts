import { useToast } from "@chakra-ui/react";

export const useShowToast = () => {
  const toast = useToast();
  const showToast = (
    message: string,
    status: "success" | "warning" | "error"
  ) => {
    toast({
      title: "",
      description: message,
      status,
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };
  return showToast;
};
