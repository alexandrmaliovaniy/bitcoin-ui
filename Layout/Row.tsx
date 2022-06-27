import { IUI } from "@ui/Interface";
import Box from "@ui/Layout/Box";

const Row = ({ reverse, ...props }: IUI.Row) => {
	return <Box direction={reverse && "row-reverse" || "row"} {...props} />;
};

export default Row;