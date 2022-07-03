import { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from "react";
import { Property } from "csstype";

export namespace IUI {

	export type Color = string | undefined;

	export type Size = "big" | "medium" | "small";

	export type ButtonType = "filled" | "outlined" | "text";
	export type IconName = "ArrowDown" | "Cross"
		| "ArrowLeft" | "ArrowRight" | "ArrowUp"
		| "DirectArrowDown" | "DirectArrowUp";
	export type IconSize = Size;
	export type ArrowSize = Size;
	export type TagSize = Size;
	export type LoaderSize = Size;
	export type PaginationDotSize = Size;
	export type ButtonSize = Size;

	interface Wrapper {
		children: ReactNode
	}

	interface HOC {
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


	export interface Icon {
		name: IconName
		size?: IconSize
		bold?: boolean
		color?: Property.Color
	}

	export interface Arrow {
		incoming?: boolean
		size?: ArrowSize
	}

	export interface Loader {
		size?: LoaderSize
		speed?: number
	}


	interface Container extends HTMLAttributes<HTMLDivElement> {
		align?: Property.AlignItems
		justify?: Property.JustifyContent
		background?: Property.Color
		inline?: boolean
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

	export interface Tag extends Row {
		outlined?: boolean
		size?: TagSize
	}

	export interface Button extends Row {
		size?: "big" | "medium" | "small"
		type?: ButtonType
		disabled?: boolean
		cancel?: boolean
		back?: boolean
		forward?: boolean
	}

	interface Control<T> extends DirectedBox {
		value: T | null
		onMutation?: (value: T | null) => void
	}

	interface UnControl<T> extends DirectedBox {
		value: T | null
		onMutation?: (value: T) => Promise<boolean>
	}

	export interface PaginationDot extends Control<boolean> {
		size?: PaginationDotSize
	}

	export interface Pagination extends Control<number> {
		count: number
		size?: PaginationDotSize
		disabled?: boolean
	}

	export interface InlineTabs extends Control<number>, Row {
		tabs: string[]
		size?: TagSize
		disabled?: boolean
	}

	export interface UInlineTabs extends Control<number>, Row {
		tabs: string[]
		size?: TagSize
	}

	export interface RadioButton extends Control<boolean> {
	}

	export interface URadioButton extends UnControl<boolean> {
	}

	export interface CheckBox extends Control<boolean> {
	}

	export interface UCheckBox extends UnControl<boolean> {
	}

	export interface Toggle extends Control<boolean> {
		small?: boolean
		disabled?: boolean
	}

	export interface UToggle extends UnControl<boolean> {
		small?: boolean
	}

}
