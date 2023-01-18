import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Pencil } from "phosphor-react";

export const EditScheduleButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/schedules/edit");
  };
  return (
    <Button leftIcon={<Pencil />} onClick={onClick}>
      編集
    </Button>
  );
};
