import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { PostCourseLogsRequest, Student } from "openapi/api-client/src";
import { FC } from "react";

type props = {
  isOpen: boolean;
  onClose: () => void;
  data: PostCourseLogsRequest;
  students: Student[];
};
export const AddAttendanceConfirmModal: FC<props> = ({ isOpen, onClose }) => {
  return (
    <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>出席登録</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={2} variant="ghost" onClick={onClose}>
            キャンセル
          </Button>
          <Button>送信する</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
