import { IUI } from "@ui/Interface";
import { TextInput } from "@ui/index";

const NumberInput = ({ value, onMutation, ...props }: IUI.NumberInput) => {

	const OnMutation = (value: string | null) => {
		onMutation &&
		onMutation(value && value.replace(/\D/g, "") || null);
	};

	return (
		<TextInput value={value?.toString() || ""} onMutation={OnMutation} {...props} />
	);
};

export default NumberInput;