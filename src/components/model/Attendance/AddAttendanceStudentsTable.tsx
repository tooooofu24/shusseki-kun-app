import {
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PostCourseLogsRequest, Student } from "openapi/api-client/src";
import { FC } from "react";
import {
  FieldArrayWithId,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";

import { ABCField } from "@/components/ui/fields/ABCField";

type props = {
  fields: FieldArrayWithId<PostCourseLogsRequest, "attendances", "id">[];
  register: UseFormRegister<PostCourseLogsRequest>;
  errors: Partial<FieldErrorsImpl<PostCourseLogsRequest>>;
  students: Student[];
};
export const AddAttendanceStudentsTable: FC<props> = ({
  fields,
  register,
  errors,
  students,
}) => {
  return (
    <TableContainer>
      <Table size={["sm", "md"]}>
        <Thead>
          <Tr>
            <Th>番号</Th>
            <Th>氏名</Th>
            <Th>出欠</Th>
            <Th>知識・技能</Th>
            <Th>思・判・表</Th>
            <Th>態度</Th>
            <Th>コメント(実装中)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fields?.map((field, i) => {
            return (
              <Row
                key={i}
                errors={errors}
                register={register}
                field={field}
                i={i}
                student={students[i]}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

type RowProps = {
  field: FieldArrayWithId<PostCourseLogsRequest, "attendances", "id">;
  register: UseFormRegister<PostCourseLogsRequest>;
  errors: Partial<FieldErrorsImpl<PostCourseLogsRequest>>;
  i: number;
  student?: Student;
};
const Row: FC<RowProps> = ({ field, register, errors, i, student }) => {
  return (
    <Tr key={field.studentId}>
      <Td>{student?.number}</Td>
      <Td>{student?.name}</Td>
      <Td>
        <FormControl isInvalid={Boolean(errors.attendances?.[i]?.attend)}>
          <Checkbox {...register(`attendances.${i}.attend`)} size="lg" />
          <FormErrorMessage justifyContent="center">
            {errors.attendances?.[i]?.attend?.message}
          </FormErrorMessage>
        </FormControl>
      </Td>
      <Td>
        <FormControl isInvalid={Boolean(errors.attendances?.[i]?.knowledge)}>
          <Flex flexDir="column" alignItems="center">
            <ABCField register={register(`attendances.${i}.knowledge`)} />
            <FormErrorMessage justifyContent="center">
              {errors.attendances?.[i]?.knowledge?.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>
      </Td>
      <Td>
        <FormControl isInvalid={Boolean(errors.attendances?.[i]?.expression)}>
          <Flex flexDir="column" alignItems="center">
            <ABCField register={register(`attendances.${i}.expression`)} />
            <FormErrorMessage justifyContent="center">
              {errors.attendances?.[i]?.expression?.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>
      </Td>
      <Td>
        <FormControl isInvalid={Boolean(errors.attendances?.[i]?.attitude)}>
          <Flex flexDir="column" alignItems="center">
            <ABCField register={register(`attendances.${i}.attitude`)} />
            <FormErrorMessage justifyContent="center">
              {errors.attendances?.[i]?.attitude?.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>
      </Td>
      <Td>
        <Flex alignItems="center" justifyContent="center">
          {/* <MessageButton register={register(`attendances.${i}.comment`)} /> */}
        </Flex>
      </Td>
    </Tr>
  );
};
