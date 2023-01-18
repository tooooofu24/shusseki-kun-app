import { Button, useDisclosure } from "@chakra-ui/react";
import { Plus } from "phosphor-react";

import { AddIPAddressModal } from "./AddIPAddressModal";

export const AddIPAddressButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<Plus />} onClick={onOpen}>
        追加する
      </Button>
      <AddIPAddressModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
