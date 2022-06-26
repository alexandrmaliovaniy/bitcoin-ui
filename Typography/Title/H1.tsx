import { IUI } from "@ui/Interface";
import Title from "@ui/Typography/Title/Title";

const H1 = (props: IUI.H) => {
	return (
		<Title fontSize={36} {...props} />
	);
};

export default H1;
