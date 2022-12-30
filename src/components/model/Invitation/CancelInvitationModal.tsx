import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Invitation } from "openapi/api-client/src";
import { FC, useState } from "react";

import { useInvitations } from "@/hooks/Invitation";
import { useShowToast } from "@/hooks/Toast";
import { deleteInvitation } from "@/utils/api/Invitation";

type props = {
  invitation: Invitation;
  isOpen: boolean;
  onClose: () => void;
};
export const CancelInvitationModal: FC<props> = ({
  invitation,
  isOpen,
  onClose,
}) => {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useInvitations();
  const onClick = async () => {
    setIsLoading(true);
    try {
      await deleteInvitation(invitation.id);
      showToast("キャンセルしました！", "success");
      onClose();
      refetch();
    } catch (e) {
      //   setError(e.message);
    }
    setIsLoading(true);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>招待キャンセル</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={3}>{invitation.email}</Text>
          上記メールアドレス宛ての招待をキャンセルします。
          <br />
          よろしいですか？
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" variant="ghost" onClick={onClose} mr={2}>
            キャンセル
          </Button>
          <Button isLoading={isLoading} onClick={onClick} colorScheme="red">
            削除する
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
