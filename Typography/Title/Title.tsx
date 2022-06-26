import { IUI } from "@ui/Interface";
import Text from "../Text";

const Title = ({ color, fontSize, ...props }: IUI.TypographyWeight) => {
	return (
		<Text color={color} fontWeight={600} fontSize={fontSize} {...props} />
	);
};

export default Title;
