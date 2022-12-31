import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Plus } from "phosphor-react";

export const AddClassroomButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/classrooms/create");
  };
  return (
    <Button leftIcon={<Plus />} onClick={onClick} disabled>
      クラス新規登録
    </Button>
  );
};
