import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import {
  PostCourseLogsRequest,
  PostCourseLogsRequestAttendancesInner,
} from "openapi/api-client/src";
import { AddressBook, Calendar, Clock, PaperPlaneTilt } from "phosphor-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { CourseField } from "@/components/ui/fields/CourseField";
import { DateField } from "@/components/ui/fields/DateField";
import { PeriodField } from "@/components/ui/fields/PeriodField";
import { SectionWrapper } from "@/components/ui/layouts/SectionWrapper";
import { useStudentsByCourseId } from "@/hooks/Student";
import { postCourseLogScheme } from "@/utils/form-scheme/CourseLog";

import { AddAttendanceConfirmModal } from "./AddAttendanceConfirmModal";
import { AddAttendanceStudentsTable } from "./AddAttendanceStudentsTable";

export const AddAttendanceForm = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { courseId, date, period } = router.query;

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm<PostCourseLogsRequest>({
    resolver: zodResolver(postCourseLogScheme),
    mode: "onSubmit",
    defaultValues: {
      courseId: Number(courseId),
      date: String(date),
      period: Number(period),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "attendances",
  });

  const { students } = useStudentsByCourseId(watch("courseId"));

  useEffect(() => {
    const data = students.map((student) => {
      return {
        studentId: student.id,
        attend: true,
        comment: "",
      };
    }) satisfies PostCourseLogsRequestAttendancesInner[];
    setValue("attendances", data);
  }, [students]);

  const onSubmit = () => {
    onOpen();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SectionWrapper>
        <Card>
          <CardBody>
            <SimpleGrid columns={[1, 3]} spacing={5}>
              <FormControl isInvalid={Boolean(errors.courseId)}>
                <FormLabel>
                  <AddressBook />
                  <Text>クラスと教科</Text>
                </FormLabel>
                <CourseField register={register("courseId")} />
                <FormErrorMessage>{errors.courseId?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.date)}>
                <FormLabel>
                  <Calendar />
                  <Text>日付</Text>
                </FormLabel>
                <DateField register={register("date")} />
                <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.period)}>
                <FormLabel>
                  <Clock />
                  時限
                </FormLabel>
                <PeriodField register={register("period")} />
                <FormErrorMessage>{errors.period?.message}</FormErrorMessage>
              </FormControl>
            </SimpleGrid>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <AddAttendanceStudentsTable
              fields={fields}
              register={register}
              errors={errors}
              students={students}
            />
          </CardBody>
        </Card>
        <Flex justifyContent="end">
          <Button leftIcon={<PaperPlaneTilt />} type="submit">
            成績を登録する
          </Button>
          <AddAttendanceConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            students={students}
            data={watch()}
          />
        </Flex>
      </SectionWrapper>
    </form>
  );
};
