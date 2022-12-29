import {
  Alert,
  AlertDescription,
  AlertIcon,
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
import { FC } from "react";

import { Link } from "@/components/ui/parts/Link";

type props = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
};

export const ErrorModal: FC<props> = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>操作に失敗しました</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{message}</AlertDescription>
          </Alert>
          <Text mt={3}>
            上記のエラーが解決できない場合、<Link href="/contact">こちら</Link>
            からお問い合わせください。
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" variant="ghost" onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
