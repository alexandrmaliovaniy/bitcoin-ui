import { IUI } from "@ui/Interface";
import Subtitle from "@ui/Typography/Subtitle/Subtitle";

const S1 = ({ children, ...props }: IUI.S) => {
	return (
		<Subtitle fontSize={24} {...props}>{children}</Subtitle>
	);
};

export default S1;
