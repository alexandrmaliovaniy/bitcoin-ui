import { IUI } from "@ui/Interface";
import { useState } from "react";
import { InlineTabs } from "@ui/index";


const UInlineTabs = ({ value: defaultValue, tabs, size, onMutation, ...props }: IUI.UInlineTabs) => {
	const [value, setValue] = useState<number | null>(defaultValue);
	const [disabled, setDisabled] = useState<boolean>(false);

	const OnMutation = async (v: number | null) => {
		setValue(v);
		setDisabled(true);
		try {
			const success = onMutation && await onMutation(v);
			if (success) return setDisabled(false);
			setDisabled(false);
			setValue(value);
		} catch {
			setDisabled(false);
			setValue(value);
		}

	};

	return (
		<InlineTabs tabs={tabs} value={value} disabled={disabled} onMutation={OnMutation} {...props}/>
	);
};

export default UInlineTabs;