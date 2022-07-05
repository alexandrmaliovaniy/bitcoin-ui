import { Col, Row } from "@ui/index";
import { IUI } from "@ui/Interface";
import styles from "./AmountLabel.module.scss";

const AmountLabel = ({ color, amount }: IUI.AmountLabel) => {
	return (
		<Row gap={5} align={"center"} color={color} height={22}>
			<Col className={styles.Sign} background={color}/>
			<Col className={styles.Caption}>{amount}</Col>
		</Row>
	);
};

export default AmountLabel;