import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & InputProps;
export const TeacherNameField: FC<props> = ({ register, ...props }) => {
  return (
    <Input placeholder="例：坂本金八" {...(register ?? null)} {...props} />
  );
};
