import { IUI } from "@ui/Interface";
import Subtitle from "@ui/Typography/Subtitle/Subtitle";

const S3 = ({ children, ...props }: IUI.S) => {
	return (
		<Subtitle fontSize={18} {...props}>{children}</Subtitle>
	);
};

export default S3;
