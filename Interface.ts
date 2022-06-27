import { CSSProperties, HTMLAttributes, ReactElement } from "react";
import { Property } from "csstype";

export namespace IUI {

	export type Color = string | undefined;

	export interface HOC {
		children?: ReactElement
	}

	export interface Typography {

	}

	export interface TypographyContainer extends Typography, HTMLAttributes<HTMLDivElement> {
		color?: Property.Color
	}

	export interface H extends TypographyContainer {
	}

	export interface S extends TypographyContainer {
	}

	export interface TypographyWeight extends TypographyContainer {
		fontSize?: number
	}

	export interface Text extends TypographyWeight {
		fontWeight?: number
	}

	interface Container extends HTMLAttributes<HTMLDivElement> {
		align?: Property.AlignItems
		justify?: Property.JustifyContent
		wide?: boolean
		width?: Property.Width
		height?: Property.Height
		gap?: Property.Gap<string | number>
		color?: Property.Color
	}

	export interface Box extends Container {
		direction?: Property.FlexDirection
	}

	export interface DirectedBox extends Container {
		reverse?: boolean
	}

	export interface Col extends DirectedBox {
	}

	export interface Row extends DirectedBox {
	}


	interface Control {
		value: any
	}

	interface BoolControl extends Control {
		value: boolean
	}


	export interface RadioButton extends BoolControl, Row {
	}

	export interface CheckBox extends BoolControl, Row {
	}


}
