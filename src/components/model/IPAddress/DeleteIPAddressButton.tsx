import {
	Box,
	Button,
	Flex,
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
import { IPAddress } from "openapi/api-client/src";
import { Tag, WifiHigh, X } from "phosphor-react";
import { FC } from "react";

type props = {
	IPAddress: IPAddress;
};
export const DeleteIPAddressButton: FC<props> = ({ IPAddress }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// const [error, setError] = useState("");

	const onClick = async () => {
		// await deleteIPAddress(IPAddress.id);
		onClose();
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
					<ModalHeader>IPアドレス削除</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex alignItems="center" gap={5}>
							<Box color="gray.500">
								<Tag />
							</Box>
							<Text>{IPAddress.label}</Text>
						</Flex>
						<Flex alignItems="center" gap={5} mt={1}>
							<Box color="gray.500">
								<WifiHigh />
							</Box>
							<Text>{IPAddress.ip}</Text>
						</Flex>
						<Text mt={4}>
							上記IPアドレスを削除します。
							<br />
							削除したIPアドレスからは操作ができなくなります。よろしいですか？
						</Text>
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
