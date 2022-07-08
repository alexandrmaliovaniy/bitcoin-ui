import Image from "@ui/Image/Image";
import ListItemCaption from "@ui/ListItem/Caption/ListItemCaption";
import ListItemSubCaption from "@ui/ListItem/Caption/ListItemSubCaption";
import ListItemWrapper from "@ui/ListItem/ListItemWrapper";
import { IUI } from "@ui/Interface";
import { RadioButton } from "@ui/index";

const ListItemRadio = ({ value, onMutation, caption, subCaption, arrow, ...props }: IUI.ListItemRadio) => {
	return (
		<ListItemWrapper
			display={<RadioButton value={value} onMutation={onMutation}/>}
			caption={caption && <ListItemCaption {...caption} />}
			subCaption={subCaption && <ListItemSubCaption {...subCaption} />}
			arrow={arrow}
			{...props}
		/>
	);
};

export default ListItemRadio;