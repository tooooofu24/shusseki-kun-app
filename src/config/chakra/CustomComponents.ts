import { colors } from "../color/color";

export const CustomComponents = {
  components: {
    // FormLabel
    FormLabel: {
      baseStyle: {
        color: colors.gray,
        display: "flex",
        gap: "8px",
        alignItems: "center",
        "> svg": {
          width: "20px",
          height: "20px",
        },
      },
    },
    // Table
    Table: {
      variants: {
        simple: {
          th: {
            color: colors.primary,
            textAlign: "center",
          },
          td: {
            textAlign: "center",
            height: 14,
          },
        },
        unstyled: {
          th: {
            color: colors.gray,
            textAlign: "center",
          },
          td: {
            textAlign: "center",
          },
        },
      },
    },
    Modal: {
      parts: ["content"],
      sizes: {
        md: {
          dialog: {
            width: "md",
            maxWidth: "95vw",
          },
        },
        lg: {
          dialog: {
            width: "lg",
            maxWidth: "95vw",
          },
        },
        xl: {
          dialog: {
            width: "lg",
            maxWidth: "95vw",
          },
        },
        "4xl": {
          dialog: {
            width: "4xl",
            maxWidth: "95vw",
          },
        },
      },
    },
  },
};
