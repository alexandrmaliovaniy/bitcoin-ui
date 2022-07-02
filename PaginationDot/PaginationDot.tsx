import { Col } from "@ui/index";
import { IUI } from "@ui/Interface";
import styles from "./PaginationDot.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";

const PaginationDot = ({ value, onMutation, size = "medium", ...props }: IUI.PaginationDot) => {
	const { color, neutral } = useTheme();
	return (
		<Col
			className={styles[size]}
			background={value ? color("orange") : neutral("neutral4")}
			onClick={() => onMutation && onMutation(null)}
			{...props}
		/>
	);
};

export default PaginationDot;