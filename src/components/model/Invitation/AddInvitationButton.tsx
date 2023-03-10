import { Button, useDisclosure } from "@chakra-ui/react";
import { UserPlus } from "phosphor-react";

import { AddInvitationModal } from "./AddInvitationModal";

export const AddInvitationButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<UserPlus />} onClick={onOpen}>
        ζεΎγγ
      </Button>
      <AddInvitationModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
