import { Input, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & InputProps;
export const DateField = ({ register, ...props }: props) => {
  return <Input type="date" {...(register ?? null)} {...props} />;
};
