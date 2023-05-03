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
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import {
  PostCourseLogsRequest,
  PostCourseLogsRequestAttendancesInner,
} from "openapi/api-client/src";
import { AddressBook, Calendar, Clock, PaperPlaneTilt } from "phosphor-react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { CourseField } from "@/components/ui/fields/CourseField";
import { DateField } from "@/components/ui/fields/DateField";
import { PeriodField } from "@/components/ui/fields/PeriodField";
import { SectionWrapper } from "@/components/ui/layouts/SectionWrapper";
import { useStudentsByCourseId } from "@/hooks/Student";
import { useShowToast } from "@/hooks/Toast";
import { postCourseLog } from "@/utils/api/CourseLog";
import { postCourseLogScheme } from "@/utils/form-scheme/CourseLog";

import { AddAttendanceStudentsTable } from "./AddAttendanceStudentsTable";

export const AddAttendanceForm = () => {
  const router = useRouter();

  const { courseId, date, period } = router.query;

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
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

  const { students } = useStudentsByCourseId(Number(courseId));

  const showToast = useShowToast();

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

  const onSubmit = async (data: PostCourseLogsRequest) => {
    setIsLoading(true);
    try {
      await postCourseLog(data);
    } catch (e) {
      showToast("出席登録に失敗しました", "error");
    }
    setIsLoading(false);
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
          <Button
            leftIcon={<PaperPlaneTilt />}
            type="submit"
            isLoading={isLoading}
          >
            成績を登録する
          </Button>
        </Flex>
      </SectionWrapper>
    </form>
  );
};
