import React, { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from "react";
import { Property } from "csstype";

export namespace IUI {

	export type Color = string | undefined;

	export type Size = "big" | "medium" | "small";

	export type ButtonType = "filled" | "outlined" | "text";
	export type ImageName = "OrangeBottle";
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

	interface Draw extends Row {
		name: string
	}

	export interface Image extends Draw {
		name: ImageName
	}

	export interface Icon extends Draw {
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
		hide?: boolean
		width?: Property.Width<any>
		height?: Property.Height<any>
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

	export interface UButton extends Button {
		onMutation: () => Promise<boolean>
	}

	export interface BaseInput extends Col {
		label?: string
		focused?: boolean
		disabled?: boolean
		error?: string
		prepend?: ReactElement
		append?: ReactElement
	}

	export interface AmountLabel {
		amount?: string
		color?: Property.Color
	}

	export interface ListItemWrapper extends Row {
		image?: ReactElement
		caption?: ReactElement
		subCaption?: ReactElement
		arrow?: boolean
	}

	export interface ListItem {
		imageName?: ImageName
		caption?: ListItemCaption
		subCaption?: ListItemSubCaption
		arrow?: boolean
	}

	interface ListItemCaptionTitle extends Col {
		title?: string
		subTitle?: string

	}

	export interface ListItemCaption extends ListItemCaptionTitle, AmountLabel {
	}

	export interface ListItemSubCaption extends ListItemCaptionTitle {
		small?: boolean
	}


	export interface ListItemBaseCaption extends ListItemCaption, ListItemSubCaption {


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

	export interface DropDownItem<T> extends Row {
		label: string
		value: T
		active?: boolean
		small?: boolean
	}

	interface DropDownBase<T> extends Control<DropDownItem<T> | null> {
		small?: boolean
	}

	export interface DropDown extends DropDownBase<any> {
		list: DropDownItem<any>[]
	}

	export interface UDropDown extends DropDownBase<any> {
		list: DropDownItem<any>[]
	}

	export interface UCountryCodeSelect extends DropDownBase<string> {
	}

	interface EnterInput<T> extends BaseInput, Control<T> {
		placeholder?: string
		onFocus?: () => void
		onBlur?: () => void

	}

	export interface TextInput extends EnterInput<string> {
	}

	export interface NumberInput extends EnterInput<string> {
	}

	export interface UPhoneInput extends EnterInput<string> {

	}
}
