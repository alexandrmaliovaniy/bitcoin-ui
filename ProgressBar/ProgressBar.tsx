import { IUI } from "@ui/Interface";
import { Col, Row } from "@ui/index";

const ProgressBar = ({ progress, color }: IUI.ProgressBar) => {
	const percent = `${progress}%`;
	return (
		<Row wide height={20} align={"center"}>
			<Row width={percent} gap={5} align={"center"}>
				<Col
					height={6}
					wide
					background={color}
					style={{
						borderRadius: 6
					}}
				/>
				<Col
					color={color}
					style={{
						fontWeight: 600,
						fontSize: 12
					}}
				>
					{percent}
				</Col>
			</Row>
		</Row>
	);
};

export default ProgressBar;