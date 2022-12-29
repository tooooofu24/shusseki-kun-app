import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { User } from "openapi/api-client/src";
import { X } from "phosphor-react";
import { FC, useState } from "react";

import { ErrorModal } from "@/components/functional/error/ErrorModal";

type props = {
  user: User;
};
export const DeleteUserButton: FC<props> = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenErrorModal,
    onOpen: onOpenErrorModal,
    onClose: onCloseErrorModal,
  } = useDisclosure();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    setIsLoading(true);
    try {
      // await deleteUser(100);
      onClose();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("不明なエラー");
      }
      onOpenErrorModal();
    }

    setIsLoading(false);
  };

  return (
    <>
      <IconButton
        colorScheme="red"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザー削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" gap="7%">
              <Avatar
                name={user.name}
                src={user.profileImage}
                size="lg"
                referrerPolicy="no-referrer"
              />
              <Flex flexDirection="column" fontSize={14} gap={1.5}>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
              </Flex>
            </Flex>
            <Text mt={4}>
              上記ユーザーを削除します。
              <br />
              削除したユーザーはログインできなくなります。よろしいですか？
            </Text>
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
        <ErrorModal
          isOpen={isOpenErrorModal}
          onClose={onCloseErrorModal}
          message={error}
        />
      </Modal>
    </>
  );
};
