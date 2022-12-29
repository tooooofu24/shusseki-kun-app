import {
	Box,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { IPAddress } from "openapi/api-client/src";
import { FC } from "react";

import { DeleteIPAddressButton } from "./DeleteIPAddressButton";

type props = {
	IPAddresses: IPAddress[];
};
export const IPAddressListTable: FC<props> = ({ IPAddresses }) => {
	return (
		<TableContainer>
			<Table size={["sm", "md"]}>
				<Thead>
					<Tr>
						<Th>使用中</Th>
						<Th>ラベル</Th>
						<Th>IPアドレス</Th>
						<Th>追加ユーザー</Th>
						<Th>追加日時</Th>
						<Th>削除</Th>
					</Tr>
				</Thead>
				<Tbody>
					{IPAddresses.map((IPAddress) => (
						<Tr key={IPAddress.id}>
							<Td>
								<Box w={8} />
							</Td>
							<Td>{IPAddress.label}</Td>
							<Td>{IPAddress.ip}</Td>
							<Td>{IPAddress.createdBy?.name}</Td>
							<Td>{/* {formatTimeStamp(IPAddress.createdAt)} */}</Td>
							<Td>
								<DeleteIPAddressButton IPAddress={IPAddress} />
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
