import { IUI } from "@ui/Interface";
import { BaseInput, Row } from "@ui/index";
import styles from "./TextInput.module.scss";
import { useTheme } from "@hooks/Theme/ThemeHook";
import { useEffect, useState } from "react";

const TextInput = ({
										 value,
										 onMutation,
										 placeholder,
										 focused: focusedDefault,
										 onFocus,
										 onBlur,
										 style,
										 ...props
									 }: IUI.TextInput) => {
	const [focused, setFocused] = useState<boolean>(focusedDefault || false);
	console.log(style)
	useEffect(() => {
		if (focused) return onFocus && onFocus();
		return onBlur && onBlur();
	}, [focused]);

	const { neutral } = useTheme();
	return (
		<BaseInput {...props} focused={focused}>
			<Row wide>
				<input
					className={styles.TextInput}
					value={value || ""}
					placeholder={placeholder}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onChange={(e) => onMutation && onMutation(e.target.value)}
					style={{
						color: focused || value ? neutral("black") : neutral("neutral5"),
						...style
					}}
				/>
			</Row>
		</BaseInput>
	);
};

export default TextInput;