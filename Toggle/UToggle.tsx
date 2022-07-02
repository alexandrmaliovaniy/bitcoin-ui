import { Toggle } from "@ui/index";
import { IUI } from "@ui/Interface";
import { useEffect, useState } from "react";

const UToggle = ({
									 value: defaultValue, onMutation, ...props
								 }: IUI.UToggle) => {
	const [value, setValue] = useState<boolean>(defaultValue || false);
	const [disabled, setDisabled] = useState<boolean>(false);
	const OnMutation = async () => {
		setValue(!value);
		setDisabled(true);
		const success = onMutation && await onMutation(!value);
		if (success) return setDisabled(false);
		setValue(value);
		setDisabled(false);
	};

	return (
		<Toggle value={value} disabled={disabled} onMutation={OnMutation} {...props}/>
	);
};

export default UToggle;