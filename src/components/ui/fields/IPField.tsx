import { Input, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & InputProps;
export const IPField = ({ register, ...props }: props) => {
  return (
    <Input placeholder="255.255.255.255" {...(register ?? null)} {...props} />
  );
};
