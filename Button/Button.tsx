import { Col, Icon, Row } from "@ui/index";
import { IUI } from "@ui/Interface";
import styles from "./Button.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";
import { FC, useMemo } from "react";

const Button = ({
									size = "medium",
									type = "filled",
									children,
									disabled,
									style,
									onClick,
									cancel,
									back,
									forward,
									...props
								}: IUI.Button) => {

	const { color, neutral } = useTheme();

	const btnClass = `
		${styles.Button}
		${styles[size]}
		${!children && styles.empty}
		${disabled && styles.disabled}
	`;

	const textColor = useMemo(() => {
		if (type === "filled") return neutral("white");
		return disabled ? neutral("neutral3") : neutral("black");
	}, [type, disabled]);

	const bgColor = useMemo(() => {
		if (type === "filled") return disabled ? neutral("neutral3") : color("orange");
		return "transparent";
	}, [type, disabled]);

	const borderColor = useMemo(() => {
		if (type === "filled") return disabled ? neutral("neutral3") : color("orange");
		if (type === "text") return "transparent";
		return disabled ? neutral("neutral3") : neutral("neutral4");
	}, [type, disabled]);

	return (
		<Row
			inline
			className={btnClass}
			align={"center"}
			background={bgColor}
			color={textColor}
			gap={children && 5 || 0}
			style={{
				borderColor,
				border: type === "outlined" ? undefined : "none",
				...style
			}}
			onClick={(e) => !disabled && onClick && onClick(e)}
			{...props}
		>
			{back && <Icon name={"ArrowLeft"} bold color={textColor} size={"medium"}/>}
			{children && <Col>{children}</Col>}
			{cancel && <Icon name={"Cross"} bold color={textColor} size={"medium"}/>}
			{forward && <Icon name={"ArrowRight"} bold color={textColor} size={"medium"}/>}
		</Row>
	);
};

export default Button;