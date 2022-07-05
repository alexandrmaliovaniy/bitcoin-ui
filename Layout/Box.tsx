import { IUI } from "@ui/Interface";
import React from "react";

const Box = React.forwardRef((
	{
		children,
		direction = "row",
		style,
		inline,
		color,
		hide,
		background,
		wide = false,
		align,
		justify,
		width,
		height,
		gap,
		...props
	}: IUI.Box, ref: React.LegacyRef<HTMLDivElement> | undefined) => {

	const isCol = ["column", "column-reverse"].includes(direction);
	return (
		<div
			style={{
				display: hide ? "none" : inline ? "inline-flex" : "flex",
				flexDirection: direction,
				justifyContent: isCol ? align : justify,
				alignItems: isCol ? justify : align,
				width: wide && !width ? "100%" : width,
				flexShrink: width ? 0 : undefined,
				flexGrow: width ? 0 : undefined,
				flexBasis: width || undefined,
				height,
				gap,
				color,
				background,
				...style
			}}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	);
});

export default Box;
