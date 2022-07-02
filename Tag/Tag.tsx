import { Row } from "@ui/index";
import { IUI } from "@ui/Interface";
import styles from "./Tag.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";

const Tag = ({ children, outlined, size = "medium", style, ...props }: IUI.Tag) => {

	const { color, neutral } = useTheme();

	const tagStyles = `
		${outlined ? styles.Tag : styles.OutlineTag}
		${styles[size]}
	`;

	return (
		<Row
			inline
			className={tagStyles}
			color={outlined ? neutral("black") : neutral("white")}
			background={outlined ? "transparent" : neutral("neutral6")}
			style={{
				borderColor: neutral("neutral6"),
				...style
			}}
			{...props}
		>
			{children}
		</Row>
	);
};

export default Tag;