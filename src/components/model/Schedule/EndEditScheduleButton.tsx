import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Check } from "phosphor-react";

export const EndEditScheduleButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };
  return (
    <Button variant="outline" leftIcon={<Check />} onClick={onClick}>
      終了
    </Button>
  );
};
