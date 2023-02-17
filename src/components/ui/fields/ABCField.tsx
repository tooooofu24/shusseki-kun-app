import { Select, SelectProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const ABCField: FC<props> = ({ register, ...props }) => {
  return (
    <Select width={20} placeholder="-" {...(register ?? null)} {...props}>
      <option value={3}>A</option>
      <option value={2}>B</option>
      <option value={1}>C</option>
    </Select>
  );
};
