import { IconButton, useDisclosure } from "@chakra-ui/react";
import { X } from "phosphor-react";

// type props = {
//   schedule: Schedule;
// };
export const DeleteScheduleButton = () => {
  const { onOpen } = useDisclosure();

  return (
    <>
      <IconButton
        colorScheme="red"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        onClick={onOpen}
      />

      {/* <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>時間割を削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {schedule.dayJa}曜{schedule.period}時間目の
            {schedule.course.subject.name}の授業を削除します。
            <br />
            よろしいですか？
            {error && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
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
      </Modal> */}
    </>
  );
};
