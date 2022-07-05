import { Col, Icon, Row } from "@ui/index";
import { IUI } from "@ui/Interface";
import styles from "./DropDown.module.scss";
import DropDownItem from "@ui/DropDown/DropDownItem";
import { useTheme } from "@hooks/Theme/ThemeHook";
import React, { useEffect, useMemo, useRef, useState } from "react";

const DropDown = ({ list, value, onMutation, small, ...props }: IUI.DropDown) => {
	const [opened, setOpened] = useState<boolean>(false);
	const { color, neutral } = useTheme();

	return (
		<Col className={`${styles.DropDown} ${small && styles.Small}`} wide {...props}>
			<Row
				className={styles.Select}
				wide align={"center"}
				justify={"space-between"}
				onClick={() => setOpened(!opened)}
			>
				<Col>
					{value?.value.toString()}
				</Col>
				<Col>
					<Icon className={opened && styles.Flip || ""} name={"ArrowDown"} size={"small"} bold/>
				</Col>
			</Row>
			<Row hide={!opened}>
				<Col className={styles.List} wide style={{
					borderColor: neutral("neutral5")
				}}>
					{
						list.map((item, index) => (
							<DropDownItem
								key={`${item.value}/${item.label}/${index}`}
								label={item.label}
								small={small}
								active={item.value === value?.value}
								value={item.value}
								onClick={() => {
									onMutation && onMutation(item);
									setOpened(false);
								}}/>
						))}
				</Col>
			</Row>
		</Col>
	);
};

export default DropDown;