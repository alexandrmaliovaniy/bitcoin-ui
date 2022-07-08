import ListItemWrapper from "@ui/ListItem/ListItemWrapper";
import { RadioButton, Toggle } from "@ui/index";
import ListItemCaption from "@ui/ListItem/Caption/ListItemCaption";
import ListItemSubCaption from "@ui/ListItem/Caption/ListItemSubCaption";
import { IUI } from "@ui/Interface";
import Image from "@ui/Image/Image";

const ListItemToggle = ({ imageName, value, onMutation, small, caption, arrow, ...params }: IUI.ListItemToggle) => {
	return (
		<ListItemWrapper
			display={imageName && <Image name={imageName}/>}
			caption={caption && <ListItemCaption {...caption} />}
			subCaption={<Toggle value={value} small={small} onMutation={onMutation}/>}
			arrow={arrow}
			{...params}
		/>
	);
};
export default ListItemToggle;