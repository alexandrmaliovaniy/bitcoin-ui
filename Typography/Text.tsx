import { IUI } from "@ui/Interface";

const Text = ({ children, fontSize, fontWeight, color, textAlign, style, ...props }: IUI.Text) => {
	return (
		<div
			style={{
				fontSize: fontSize,
				color: color,
				lineHeight: "140%",
				fontWeight: fontWeight,
				textAlign: textAlign,
				...style
			}}
			{...props}
		>
			{children}
		</div>
	);
};

export default Text;
