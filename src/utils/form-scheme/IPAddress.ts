import { PostIpAddressRequest } from "openapi/api-client/src";
import { z } from "zod";

import { formError } from "@/config/error/formError";

import { schemaFromType } from "./utils";

export const postIPAddressScheme = schemaFromType<PostIpAddressRequest>()(
  z.object({
    ip: z.coerce
      .string()
      .min(1, { message: formError.REQUIRED })
      .regex(
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/,
        { message: formError.INVALID_FORMAT }
      ),
    label: z.coerce.string().min(1, { message: formError.REQUIRED }),
  })
);
