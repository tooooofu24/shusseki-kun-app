import { IconButton } from "@chakra-ui/react";
import { EnvelopeSimple } from "phosphor-react";
import { FC } from "react";

import { Invitation } from "@/types/Invitation";

type props = {
	invitation: Invitation;
};
export const SendInvitationMailButton: FC<props> = () => {
	const onClick = () => {
		// sendInvitationMail(invitation)
		//   .then(() => showToast("メールを再送信しました！", "success"))
		//   .catch((e) => showToast(e.message, "error"));
	};
	return (
		<IconButton
			icon={<EnvelopeSimple />}
			aria-label="メール送信"
			rounded="full"
			onClick={onClick}
		/>
	);
};
