import { Input, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & InputProps;
export const IPLabelField = ({ register, ...props }: props) => {
  return (
    <Input placeholder="自宅、学校等" {...(register ?? null)} {...props} />
  );
};
