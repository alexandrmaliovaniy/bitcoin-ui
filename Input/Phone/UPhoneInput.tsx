import NumberInput from "@ui/Input/Number/NumberInput";
import { IUI } from "@ui/Interface";
import { useEffect, useState } from "react";
import { UCountryCodeSelect } from "@ui/index";

const UPhoneInput = ({ value: defaultValue, onMutation, ...props }: IUI.UPhoneInput) => {
	const [value, setValue] = useState<string>(defaultValue || "");
	const [countryCode, setCountryCode] = useState<string>("");
	const OnCountryCodeMutate = (v: IUI.DropDownItem<string> | null) => {
		setCountryCode(v?.value || "");
	};
	const OnMutation = (v: string | null) => {
		setValue(v || "");
	};

	useEffect(() => {
		onMutation && onMutation(countryCode + value);
	}, [value, countryCode]);

	const Drop = <UCountryCodeSelect
		value={null}
		onMutation={OnCountryCodeMutate}
		width={100}
	/>;

	return (
		<NumberInput {...props} prepend={Drop} onMutation={OnMutation} value={value || ""} style={{
			paddingLeft: 10
		}}/>
	);
};

export default UPhoneInput;