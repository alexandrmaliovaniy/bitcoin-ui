import { IUI } from "@ui/Interface";
import Subtitle from "@ui/Typography/Subtitle/Subtitle";

const S4 = ({ children, ...props }: IUI.S) => {
	return (
		<Subtitle fontSize={15} {...props}>{children}</Subtitle>
	);
};

export default S4;
