import { IUI } from "@ui/Interface";
import { Button } from "@ui/index";
import { useState } from "react";

const UButton = (props: IUI.UButton) => {
	const [disabled, setDisabled] = useState<boolean>(false);

	const OnMutation = async () => {
		setDisabled(true);
		props.onMutation && await props.onMutation();
		setDisabled(false);
	};

	return <Button {...props} disabled={disabled} onClick={OnMutation}/>;
};

export default UButton;