import { IUI } from "@ui/Interface";

const Box = (
	{
		children,
		direction = "row",
		style,
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
				display: "flex",
				flexDirection: direction,
				justifyContent: isCol ? align : justify,
				alignItems: isCol ? justify : align,
				width: wide ? "100%" : width,
				height: height,
				gap: gap,
				...style
			}}
			{...props}
		>
			{children}
		</div>
	);
};

export default Box;
