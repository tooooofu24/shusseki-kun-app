import { ResponsiveValue, ThemeTypings } from "@chakra-ui/react";
import * as CSS from "csstype";

declare type Token<
	CSSType,
	ThemeKey = unknown
> = ThemeKey extends keyof ThemeTypings
	? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]>
	: ResponsiveValue<CSSType>;

type Color = Token<CSS.Property.Color, "colors">;

type Colors = {
	primary: Color;
	gray: Color;
	black: Color;
	lightGray: Color;
};

export const colors: Colors = {
	primary: "teal.500",
	gray: "gray.500",
	black: "gray.700",
	lightGray: "gray.50",
};
