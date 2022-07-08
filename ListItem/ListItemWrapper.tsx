import { IUI } from "@ui/Interface";
import { Col, Icon, Row } from "@ui/index";
import { useTheme } from "@hooks/Theme/ThemeHook";

const ListItemWrapper = ({ display, caption, subCaption, arrow, style, ...props }: IUI.ListItemWrapper) => {
	return (
		<Row justify={"space-between"} align={"center"} style={{
			paddingTop: 8,
			paddingBottom: 8,
			...style
		}} {...props}>
			<Row hide={!display && !caption} gap={10} width={"60%"} align={"center"}>
				<Col hide={!display}>
					{display}
				</Col>
				<Col hide={!caption} wide>
					{caption}
				</Col>
			</Row>
			<Row align={"center"} hide={!subCaption && !arrow} width={"40%"} justify={"end"}>
				<Col hide={!subCaption}>
					{subCaption}
				</Col>
				<Col hide={!arrow}>
					<Icon name={"ArrowRight"} size={"small"}/>
				</Col>
			</Row>
		</Row>
	);
};

export default ListItemWrapper;