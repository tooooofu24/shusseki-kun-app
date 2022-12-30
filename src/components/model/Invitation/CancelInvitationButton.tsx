import { IconButton, useDisclosure } from "@chakra-ui/react";
import { Invitation } from "openapi/api-client/src";
import { X } from "phosphor-react";
import { FC } from "react";

import { CancelInvitationModal } from "./CancelInvitationModal";

type props = {
  invitation: Invitation;
};
export const CancelInvitationButton: FC<props> = ({ invitation }) => {
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
      <CancelInvitationModal
        invitation={invitation}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};
