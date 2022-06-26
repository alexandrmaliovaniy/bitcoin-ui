import { IUI } from "@ui/Interface";
import Subtitle from "@ui/Typography/Subtitle/Subtitle";

const S2 = ({ children, ...props }: IUI.S) => {
	return (
		<Subtitle fontSize={21} {...props}>{children}</Subtitle>
	);
};

export default S2;
