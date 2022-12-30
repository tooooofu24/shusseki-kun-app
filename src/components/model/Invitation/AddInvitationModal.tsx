import {
  Button,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { FlushedEmailField } from "@/components/functional/form/FlushedEmailField";
import { useInvitations } from "@/hooks/Invitation";
import { useShowToast } from "@/hooks/Toast";
import { postInvitation } from "@/utils/api/Invitation";
import {
  postInvitationForm,
  postInvitationScheme,
} from "@/utils/form-scheme/Invitation";

type props = {
  isOpen: boolean;
  onClose: () => void;
};
export const AddInvitationModal: FC<props> = (props) => {
  const { onClose } = props;
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useInvitations();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<postInvitationForm>({
    resolver: zodResolver(postInvitationScheme),
  });

  const onSubmit = async (data: postInvitationForm) => {
    setIsLoading(true);
    await postInvitation(data)
      .then(() => {
        showToast("招待しました！", "success");
        onClose();
        refetch();
      })
      .catch((e) => setError("email", { message: e.message }));
    setIsLoading(false);
  };
  return (
    <Modal size="md" isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>ユーザー招待</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3}>招待したい方のメールアドレスを入力してください。</Text>
            <FormControl isInvalid={Boolean(errors.email)}>
              <FlushedEmailField register={register("email")} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={2} variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button type="submit" isLoading={isLoading}>
              招待する
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
