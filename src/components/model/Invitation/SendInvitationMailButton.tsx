import { IconButton } from "@chakra-ui/react";
import { Invitation } from "openapi/api-client/src";
import { EnvelopeSimple } from "phosphor-react";
import { FC, useState } from "react";

import { useShowToast } from "@/hooks/Toast";
import { sendInvitationMail } from "@/utils/api/Invitation";

type props = {
  invitation: Invitation;
};
export const SendInvitationMailButton: FC<props> = ({ invitation }) => {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    setIsLoading(true);
    await sendInvitationMail(invitation.id)
      .then(() => showToast("送信しました！", "success"))
      .catch(() => showToast("送信に失敗しました", "error"));
    setIsLoading(false);
  };
  return (
    <IconButton
      icon={<EnvelopeSimple />}
      aria-label="メール送信"
      rounded="full"
      onClick={onClick}
      isLoading={isLoading}
    />
  );
};
