import { IUI } from "@ui/Interface";
import { Row } from "@ui/index";
import * as Images from "./img/index";

const Image = ({ name, ...props }: IUI.Image) => {
	if (!name) return null;
	const Img = Images[name];
	return (
		<Row {...props}>
			<Img/>
		</Row>
	);
};

export default Image;