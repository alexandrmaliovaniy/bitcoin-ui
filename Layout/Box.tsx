import { IUI } from "@ui/Interface";

const Box = (
	{
		children,
		direction = "row",
		style,
		inline,
		color,
		background,
		wide = false,
		align,
		justify,
		width,
		height,
		gap,
		...props
	}: IUI.Box) => {

	const isCol = ["column", "column-reverse"].includes(direction);

	return (
		<div
			style={{
				display: inline ? "inline-flex" : "flex",
				flexDirection: direction,
				justifyContent: isCol ? align : justify,
				alignItems: isCol ? justify : align,
				width: wide ? "100%" : width,
				height,
				gap,
				color,
				background,
				...style
			}}
			{...props}
		>
			{children}
		</div>
	);
};

export default Box;
