import { IconButton, useDisclosure } from "@chakra-ui/react";
import { IPAddress } from "openapi/api-client/src";
import { X } from "phosphor-react";
import { FC } from "react";

import { DeleteIPAddressModal } from "./DeleteIPAddressModal";

type props = {
  IPAddress: IPAddress;
};
export const DeleteIPAddressButton: FC<props> = ({ IPAddress }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        colorScheme="red"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        onClick={onOpen}
      />

      <DeleteIPAddressModal
        onClose={onClose}
        isOpen={isOpen}
        IPAddress={IPAddress}
      />
    </>
  );
};
