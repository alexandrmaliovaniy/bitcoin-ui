import { Col, ProgressBar, Row, S3, S4 } from "@ui/index";
import { IUI } from "@ui/Interface";
import AmountLabel from "@ui/AmountLabel/AmountLabel";
import { useTheme } from "@hooks/Theme/ThemeHook";

const ListItemBaseCaption = ({
															 title,
															 subTitle,
															 small,
															 amount,
															 progress,
															 color,
															 textAlign,
															 ...props
														 }: IUI.ListItemBaseCaption) => {
	const { neutral } = useTheme();
	return (
		<Col align={"center"} {...props}>
			<Row
				hide={!title}
				color={small ? neutral("neutral8") : neutral("black")}
			>
				<S3 style={{
					fontSize: small ? 15 : 18
				}}>{title}</S3>
			</Row>
			<Row hide={!subTitle} color={neutral("neutral7")}>
				<S4 textAlign={textAlign}>{subTitle}</S4>
			</Row>
			<Row hide={!amount}>
				<AmountLabel amount={amount} color={color}/>
			</Row>
			<Row hide={!progress}>
				<ProgressBar progress={progress} color={color}/>
			</Row>
		</Col>
	);
};

export default ListItemBaseCaption;