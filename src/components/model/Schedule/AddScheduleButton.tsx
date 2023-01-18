import { IconButton, useDisclosure } from "@chakra-ui/react";
import { Plus } from "phosphor-react";

import { Day } from "../../../types/Day";
import { Period } from "../../../types/Period";
import { AddScheduleModal } from "./AddScheduleModal";

type props = {
  period: Period;
  day: Day;
};
export const AddScheduleButton = ({ period, day }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={<Plus />}
        aria-label="追加"
        rounded="full"
      />
      <AddScheduleModal
        isOpen={isOpen}
        onClose={onClose}
        period={period}
        day={day}
      />
    </>
  );
};
