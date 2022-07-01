import { Toggle } from "@ui/index";
import { IUI } from "@ui/Interface";
import { useEffect, useState } from "react";

const UToggle = ({
									 value: defaultValue, onMutation = () => {
	}, ...props
								 }: IUI.UToggle) => {
	const [value, setValue] = useState<boolean>(defaultValue || false);
	useEffect(() => {
		onMutation(value);
	}, [value]);
	return (
		<Toggle value={value} onMutation={() => setValue(!value)} {...props}/>
	);
};

export default UToggle;