import { DropDown } from "@ui/index";
import { IUI } from "@ui/Interface";
import { useState } from "react";

const UDropDown = ({ list, value: defaultValue, onMutation, ...props }: IUI.UDropDown) => {
	const [value, setValue] = useState<IUI.DropDownItem<string> | null>(defaultValue || list[0] || null);

	const OnMutation = (v: IUI.DropDownItem<string> | null) => {
		setValue(v);
		onMutation && onMutation(v);
	};

	return (
		<DropDown list={list} value={value} onMutation={OnMutation} {...props}/>
	);
};

export default UDropDown;