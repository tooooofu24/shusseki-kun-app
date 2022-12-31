import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { EnvelopeSimple } from "phosphor-react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & InputProps;
export const FlushedEmailField = ({ register, ...props }: props) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.500">
        <EnvelopeSimple />
      </InputLeftElement>
      <Input
        variant="flushed"
        placeholder="user@shusseki-kun.com"
        {...(register ?? null)}
        {...props}
      />
    </InputGroup>
  );
};
