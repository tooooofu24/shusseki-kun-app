import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IPAddress } from "openapi/api-client/src";
import { Tag, WifiHigh } from "phosphor-react";
import { FC, useState } from "react";

import { useIPAddresses } from "@/hooks/IPAddress";
import { deleteIPAddress } from "@/utils/api/IPAdress";

type props = {
  IPAddress: IPAddress;
  isOpen: boolean;
  onClose: () => void;
};
export const DeleteIPAddressModal: FC<props> = ({
  IPAddress,
  isOpen,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useIPAddresses();
  const onClick = async () => {
    setIsLoading(true);
    try {
      await deleteIPAddress(IPAddress.id);
      onClose();
      refetch();
    } catch (e) {
      //   setError(e.message);
    }
    setIsLoading(false);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>IPアドレス削除</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex alignItems="center" gap={5}>
            <Box color="gray.500">
              <Tag />
            </Box>
            <Text>{IPAddress.label}</Text>
          </Flex>
          <Flex alignItems="center" gap={5} mt={1}>
            <Box color="gray.500">
              <WifiHigh />
            </Box>
            <Text>{IPAddress.ip}</Text>
          </Flex>
          <Text mt={4}>
            上記IPアドレスを削除します。
            <br />
            削除したIPアドレスからは操作ができなくなります。よろしいですか？
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
    </Modal>
  );
};
