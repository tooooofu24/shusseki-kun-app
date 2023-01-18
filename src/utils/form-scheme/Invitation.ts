import { PostInvitationRequest } from "openapi/api-client/src";
import { z } from "zod";

import { formError } from "@/config/error/formError";

import { schemaFromType } from "./utils";

export const postInvitationScheme = schemaFromType<PostInvitationRequest>()(
  z.object({
    email: z
      .string()
      .min(1, { message: formError.REQUIRED })
      .email({ message: formError.INVALID_EMAIL }),
  })
);
export type postInvitationForm = z.infer<typeof postInvitationScheme>;
