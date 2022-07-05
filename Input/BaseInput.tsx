import { Col, Row, S4 } from "@ui/index";
import styles from "./BaseInput.module.scss";
import { IUI } from "@ui/Interface";
import { useTheme } from "@hooks/Theme/ThemeHook";

const BaseInput = ({ label, children, error, focused, prepend, append, ...props }: IUI.BaseInput) => {
	const { color, neutral } = useTheme();
	return (
		<Col className={styles.BaseInput} gap={12} {...props}>
			{
				label &&
				<Row
					color={neutral("black")}
				>
					<S4>{label}</S4>
				</Row>
			}
			<Row className={styles.Field}
					 style={{
						 borderColor: error ? color("red") : focused ? color("blue") : neutral("neutral3")
					 }}
			>
				{prepend}
				{children}
				{append}
			</Row>
		</Col>
	);
};

export default BaseInput;