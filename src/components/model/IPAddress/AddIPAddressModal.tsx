import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostIpAddressRequest } from "openapi/api-client/src";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { IPField } from "@/components/ui/fields/IPField";
import { IPLabelField } from "@/components/ui/fields/IPLabelField";
import { useIPAddresses } from "@/hooks/IPAddress";
import { postIPAddress } from "@/utils/api/IPAdress";
import { postIPAddressScheme } from "@/utils/form-scheme/IPAddress";

type props = {
  isOpen: boolean;
  onClose: () => void;
};
export const AddIPAddressModal: FC<props> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostIpAddressRequest>({
    resolver: zodResolver(postIPAddressScheme),
    mode: "onBlur",
  });

  const { refetch } = useIPAddresses();
  const onSubmit = async (data: PostIpAddressRequest) => {
    setIsLoading(true);
    await postIPAddress(data);
    setIsLoading(false);
    onClose();
    refetch();
  };
  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>IPアドレスの追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" gap="15px">
              <FormControl
                display="flex"
                alignItems="center"
                isInvalid={Boolean(errors.label)}
              >
                <Box flex={1}>
                  <FormLabel m={0} justifyContent="center">
                    ラベル
                  </FormLabel>
                </Box>
                <Box flex={3}>
                  <IPLabelField
                    variant="flushed"
                    register={register("label")}
                  />
                  <FormErrorMessage>{errors.label?.message}</FormErrorMessage>
                </Box>
              </FormControl>
              <FormControl
                display="flex"
                alignItems="center"
                isInvalid={Boolean(errors.ip)}
              >
                <Box flex={1}>
                  <FormLabel m={0} justifyContent="center">
                    IP
                  </FormLabel>
                </Box>
                <Box flex={3}>
                  <IPField variant="flushed" register={register("ip")} />
                  <FormErrorMessage>{errors.ip?.message}</FormErrorMessage>
                </Box>
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={2} variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button isLoading={isLoading} type="submit">
              追加する
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
