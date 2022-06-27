import { IUI } from "@ui/Interface";
import Box from "@ui/Layout/Box";

const Col = ({ reverse, ...props }: IUI.Col) => {
	return <Box direction={reverse && "column-reverse" || "column"} {...props} />;
};

export default Col;