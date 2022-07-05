import { IUI } from "@ui/Interface";
import Box from "@ui/Layout/Box";
import React from "react";

const Row = React.forwardRef(({ reverse, ...props }: IUI.Row, ref: React.Ref<HTMLDivElement>) => {
	return <Box direction={reverse && "row-reverse" || "row"} {...props} ref={ref}/>;
});

export default Row;