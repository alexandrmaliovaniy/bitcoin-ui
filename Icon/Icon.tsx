import { IUI } from "@ui/Interface";
import * as Icons from "./svg";
import { Row } from "@ui/index";

const Icon = ({ name, size = "medium", bold = false, color }: IUI.Icon) => {
	if (!name) return null;
	const Svg = Icons[name] && Icons[name][bold ? "bold" : "thin"] && Icons[name][bold ? "bold" : "thin"][size];
	return (
		<Row style={{
			stroke: color || "#000"
		}}>
			<Svg/>
		</Row>
	);
};

export default Icon;