import { IUI } from "@ui/Interface";
import { Col, Row, S3 } from "@ui/index";
import styles from "./DropDownItem.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";

const DropDownItem = ({ label, value, active, small, ...params }: IUI.DropDownItem<any>) => {
	const { color, neutral } = useTheme();
	return (
		<Row
			className={`${styles.Item} ${small && styles.Small}`}
			wide
			align={"center"}
			justify={"space-between"}
			style={{
				borderColor: neutral("neutral4")
			}}
			background={neutral("white")}
			color={active ? color("orange") : neutral("black")}
			{...params}
		>
			<Col>
				{label}
			</Col>
			<Col>
				{value}
			</Col>
		</Row>
	);
};

export default DropDownItem;