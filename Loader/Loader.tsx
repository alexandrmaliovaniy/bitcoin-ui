import styles from "./Loader.module.scss";
import { Row } from "@ui/index";
import { IUI } from "@ui/Interface";
import { useTheme } from "@hooks/Theme/ThemeHook";

const Loader = ({ speed = 1, size = "medium" }: IUI.Loader) => {
	const { neutral } = useTheme();
	return (
		<Row className={`${styles.Loader} ${styles[size]}`} style={{
			animationDuration: `${1 / speed}s`
		}}>
			<Row className={styles.Circle}
					 align={"center"}
					 justify={"center"}
					 background={`conic-gradient(from 180deg at 50% 50%, rgba(222, 222, 222, 0) 0deg, ${neutral("neutral4")} 360deg)`}
			>
				<div className={styles.Gap} style={{
					background: neutral("white")
				}}>
					<div className={styles.Dot} style={{
						background: neutral("neutral4")
					}}/>
				</div>
			</Row>
		</Row>
	);
};

export default Loader;