import { IUI } from "@ui/Interface";
import { Col, Row, S4 } from "@ui/index";
import styles from "./CheckBox.module.scss";

const RadioButton = ({ value, onClick, gap = 10, children, ...props }: IUI.CheckBox) => {
	return (
		<Row gap={gap} className={styles.Box} onClick={onClick} {...props}>
			<Col className={styles.Button} justify={"center"} align={"center"}>
				<Col className={value && styles.Check || ""}/>
			</Col>
			<Col>
				<S4>
					{children}
				</S4>
			</Col>
		</Row>
	);
};

export default RadioButton;
