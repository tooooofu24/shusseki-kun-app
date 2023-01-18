import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostScheduleRequest } from "openapi/api-client/src";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { ClassroomField } from "@/components/ui/fields/ClassroomField";
import { SubjectField } from "@/components/ui/fields/SubjectField";
import { useSchedules } from "@/hooks/Schedule";
import { Day } from "@/types/Day";
import { Period } from "@/types/Period";
import { postSchedule } from "@/utils/api/Schedule";
import { addScheduleScheme } from "@/utils/form-scheme/Schedule";

type props = {
  isOpen: boolean;
  onClose: () => void;
  day: Day;
  period: Period;
};
export const AddScheduleModal: FC<props> = ({
  isOpen,
  onClose,
  day,
  period,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostScheduleRequest>({
    resolver: zodResolver(addScheduleScheme),
    defaultValues: {
      day,
      period,
    },
  });
  const { refetch } = useSchedules();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: PostScheduleRequest) => {
    setIsLoading(true);
    await postSchedule(data);
    setIsLoading(false);
    refetch();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            {day}曜日{period}時間目
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="hidden" {...register("day")} />
            <Input type="hidden" {...register("period")} />
            <Flex flexDirection="column" gap="15px">
              <FormControl
                display="flex"
                alignItems="center"
                isInvalid={Boolean(errors.subjectId)}
              >
                <Box flex={1}>
                  <FormLabel m={0} justifyContent="center">
                    教科
                  </FormLabel>
                </Box>
                <Box flex={2}>
                  <SubjectField register={register("subjectId")} />
                  <FormErrorMessage>
                    {errors.subjectId?.message}
                  </FormErrorMessage>
                </Box>
              </FormControl>
              <FormControl
                display="flex"
                alignItems="center"
                isInvalid={Boolean(errors.classroomId)}
              >
                <Box flex={1}>
                  <FormLabel m={0} justifyContent="center">
                    クラス
                  </FormLabel>
                </Box>
                <Box flex={2}>
                  <ClassroomField register={register("classroomId")} />
                  <FormErrorMessage>
                    {errors.classroomId?.message}
                  </FormErrorMessage>
                </Box>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="gray" mr={2} onClick={onClose}>
              キャンセル
            </Button>
            <Button type="submit" isLoading={isLoading}>
              授業を追加
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
