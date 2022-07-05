import TextInput from "@ui/Input/Text/TextInput";
import NumberInput from "@ui/Input/Number/NumberInput";
import { IUI } from "@ui/Interface";
import { useEffect, useState } from "react";
import { UCountryCodeSelect } from "@ui/index";
import { useTheme } from "@hooks/Theme/ThemeHook";

const UPhoneInput = ({ value: defaultValue, onMutation, ...props }: IUI.UPhoneInput) => {
	const [value, setValue] = useState<string>(defaultValue || "");
	const [countryCode, setCountryCode] = useState<string>("");
	const [error, setError] = useState("");
	const { neutral } = useTheme();
	const OnCountryCodeMutate = (v: IUI.DropDownItem<string> | null) => {
		setCountryCode(v?.value || "");
	};
	const OnMutation = (v: string | null) => {
		setValue(v || "");
	};

	useEffect(() => {
		const number = countryCode + value;
		if (!(number.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(number.match(/0{5,}/)))) return setError("Invalid Number!");
		setError("");
		onMutation && onMutation(countryCode + value);
	}, [value, countryCode]);

	const Drop = <UCountryCodeSelect
		value={null}
		onMutation={OnCountryCodeMutate}
		width={100}
	/>;

	return (
		<NumberInput {...props} prepend={Drop} error={error} onMutation={OnMutation} value={value || ""} style={{
			paddingLeft: 10
		}}/>
	);
};

export default UPhoneInput;