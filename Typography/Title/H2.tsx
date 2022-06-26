import { IUI } from "@ui/Interface";
import Title from "@ui/Typography/Title/Title";

const H2 = (props: IUI.H) => {
	return (
		<Title fontSize={28} {...props} />
	);
};

export default H2;
