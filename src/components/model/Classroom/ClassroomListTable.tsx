import {
  Flex,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CaretRight } from "phosphor-react";
import { FC } from "react";

import { Classroom } from "@/types/Classroom";
import { formatTimeStamp } from "@/utils/time";

type props = {
  classrooms: Classroom[];
};
export const ClassroomListTable: FC<props> = ({ classrooms }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md"]}>
        <Thead>
          <Tr>
            <Th>クラス</Th>
            <Th>担任</Th>
            <Th>人数</Th>
            <Th>授業</Th>
            <Th>最終授業日</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {classrooms?.map((classroom) => {
            return <Row key={classroom.id} classroom={classroom} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Row = ({ classroom }: { classroom: Classroom }) => {
  const router = useRouter();
  return (
    <Tr
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={() => router.push("/classrooms/" + classroom.id)}
    >
      <Td>
        {classroom.grade}年{classroom.name}組
      </Td>
      <Td>{classroom.teacher}</Td>
      <Td>{classroom.studentsCount}人</Td>
      <Td>
        <Flex gap="10px" justifyContent="center">
          {!classroom.courses?.length && (
            <Tag
              colorScheme="gray"
              shadow="none"
              variant="outline"
              color="chakra-body-text"
            >
              なし
            </Tag>
          )}
          {classroom.courses?.map((course) => {
            return <Tag key={course.id}>{course.subject.name}</Tag>;
          })}
        </Flex>
      </Td>
      <Td>{formatTimeStamp(classroom.lastLessonDate) || "-"}</Td>
      <Td>
        <Flex justifyContent="end" alignItems="center">
          <CaretRight />
        </Flex>
      </Td>
    </Tr>
  );
};
