import { IUI } from "@ui/Interface";
import styles from "./Toggle.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";
import { useEffect, useMemo, useRef } from "react";
import { Row } from "@ui/index";

const Toggle = (
	{
		value, onMutation = () => {
	},
		small,
		disabled
	}: IUI.Toggle) => {
	const toggleRef = useRef<HTMLDivElement>(null);
	const { neutral, color } = useTheme();

	useEffect(() => {
		if (!toggleRef.current) return;
		if (value) return toggleRef.current.classList.add(styles.ToggleActive);
		toggleRef.current.classList.remove(styles.ToggleActive);
	}, [value, disabled]);


	const thumbClassName = `
		${small ? styles.ToggleSmall : styles.Toggle}
		${disabled ? styles.ToggleDisabled : null}
	`;

	const toggleColor = value ? color("orange") : neutral("neutral4");

	return (
		<div className={thumbClassName} style={{
			background: toggleColor
		}} onClick={() => !disabled && onMutation(null)} ref={toggleRef}>
			<Row className={styles.DisableWrapper}>
				<div className={styles.Thumb} style={{
					background: neutral("white")
				}}/>
			</Row>
		</div>
	);
};

export default Toggle;