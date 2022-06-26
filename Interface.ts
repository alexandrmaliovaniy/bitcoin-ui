import { HTMLAttributes, ReactElement } from "react";

export namespace IUI {

	export type Color = string | undefined;

	export interface HOC {
		children?: ReactElement
	}

	export interface Typography {

	}

	export interface TypographyContainer extends Typography, HTMLAttributes<HTMLDivElement> {
		color: Color
	}

	export interface H extends TypographyContainer {}
	export interface S extends TypographyContainer {}

	export interface TypographyWeight extends TypographyContainer {
		fontSize?: number
	}

	export interface Text extends TypographyWeight {
		fontWeight?: number
	}


}
