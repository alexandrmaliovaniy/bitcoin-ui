import { IUI } from "@ui/Interface";
import Text from "../Text";

const Subtitle = ({ color, fontSize, ...props }: IUI.TypographyWeight) => {
	return (
		<Text color={color} fontWeight={400} fontSize={fontSize} {...props} />
	);
};

export default Subtitle;
