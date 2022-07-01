import { IUI } from "@ui/Interface";
import { Col, Row, S4 } from "@ui/index";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ value, onMutation, gap = 10, children, ...props }: IUI.RadioButton) => {
	return (
		<Row gap={gap} className={styles.Radio} onClick={onMutation} {...props}>
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
