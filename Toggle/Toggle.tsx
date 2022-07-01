import { IUI } from "@ui/Interface";
import styles from "./Toggle.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";
import { useEffect, useRef } from "react";

const Toggle = (
	{
		value, onMutation = () => {
	},
		small
	}: IUI.Toggle) => {
	const toggleRef = useRef<HTMLDivElement>(null);
	const { neutral, color } = useTheme();

	useEffect(() => {
		if (!toggleRef.current) return;
		if (value) return toggleRef.current.classList.add(styles.ToggleActive);
		toggleRef.current.classList.remove(styles.ToggleActive);
	}, [value, toggleRef]);


	const thumbClassName = `
		${small ? styles.ToggleSmall : styles.Toggle}
	`;

	const toggleColor = value ? color("orange") : neutral("neutral4");

	return (
		<div className={thumbClassName} style={{
			background: toggleColor
		}} onClick={() => onMutation()} ref={toggleRef}>
			<div className={styles.Thumb} style={{
				background: neutral("white")
			}}>

			</div>
		</div>
	);
};

export default Toggle;