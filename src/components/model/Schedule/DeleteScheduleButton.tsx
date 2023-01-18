import { IconButton, useDisclosure } from "@chakra-ui/react";
import { Schedule } from "openapi/api-client/src";
import { X } from "phosphor-react";
import { FC } from "react";

import { DeleteScheduleModal } from "./DeleteScheduleModal";

type props = {
  schedule: Schedule;
};
export const DeleteScheduleButton: FC<props> = ({ schedule }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        colorScheme="red"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        onClick={onOpen}
      />
      <DeleteScheduleModal
        schedule={schedule}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
