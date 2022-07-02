import { Icon, Row } from "@ui/index";
import { IUI } from "@ui/Interface";
import { useTheme } from "@hooks/Theme/ThemeHook";
import styles from "./Arrow.module.scss";

const Arrow = ({ incoming, size = "medium" }: IUI.Arrow) => {
	const { color, neutral } = useTheme();
	return (
		<Row className={styles[size]} align={"center"} justify={"center"} style={{
			background: incoming ? color("green") : color("red")
		}}>
			<Icon name={incoming ? "DirectArrowDown" : "DirectArrowUp"} size={size} bold={true} color={neutral("white")}/>
		</Row>
	);
};

export default Arrow;