import { IUI } from "@ui/Interface";
import { Col, Icon, Row } from "@ui/index";
import { useTheme } from "@hooks/Theme/ThemeHook";

const ListItemWrapper = ({ image, caption, subCaption, arrow, ...props }: IUI.ListItemWrapper) => {
	return (
		<Row justify={"space-between"} align={"center"} {...props}>
			<Row hide={!image && !caption} gap={10} align={"center"}>
				<Col hide={!image}>
					{image}
				</Col>
				<Col hide={!caption}>
					{caption}
				</Col>
			</Row>
			<Row align={"center"} hide={!subCaption && !arrow}>
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