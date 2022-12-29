import {
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { Invitation } from "openapi/api-client/src";
import { X } from "phosphor-react";
import { FC } from "react";

import { deleteInvitation } from "@/utils/api/Invitation";

type props = {
	invitation: Invitation;
};
export const CancelInvitationButton: FC<props> = ({ invitation }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onClick = async () => {
		try {
			await deleteInvitation(invitation.id);
			onClose();
		} catch (e) {
			//   setError(e.message);
		}
	};

	return (
		<>
			<IconButton
				colorScheme="red"
				icon={<X />}
				aria-label="削除"
				rounded="full"
				onClick={onOpen}
			/>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>招待キャンセル</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text mb={3}>{invitation.email}</Text>
						上記メールアドレス宛ての招待をキャンセルします。
						<br />
						よろしいですか？
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="gray" variant="ghost" onClick={onClose} mr={2}>
							キャンセル
						</Button>
						<Button onClick={onClick} colorScheme="red">
							削除する
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
