import { IUI } from "@ui/Interface";
import Title from "@ui/Typography/Title/Title";

const H3 = (props: IUI.H) => {
	return (
		<Title fontSize={24} {...props} />
	);
};

export default H3;
