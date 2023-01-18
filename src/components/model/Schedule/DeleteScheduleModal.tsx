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
import { Schedule } from "openapi/api-client/src";
import { FC, useState } from "react";

import { useSchedules } from "@/hooks/Schedule";
import { deleteSchedule } from "@/utils/api/Schedule";

type props = {
  isOpen: boolean;
  onClose: () => void;
  schedule: Schedule;
};
export const DeleteScheduleModal: FC<props> = ({
  isOpen,
  onClose,
  schedule,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useSchedules();
  const onClick = async () => {
    setIsLoading(true);
    await deleteSchedule(schedule.id);
    setIsLoading(false);
    refetch();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>時間割を削除</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {schedule.dayJa}曜{schedule.period}時間目の
          {schedule.course.subject.name}の授業を削除します。
          <br />
          よろしいですか？
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" colorScheme="gray" onClick={onClose} mr={2}>
            キャンセル
          </Button>
          <Button colorScheme="red" onClick={onClick} isLoading={isLoading}>
            削除
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
