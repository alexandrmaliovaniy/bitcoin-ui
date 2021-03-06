import ListItemWrapper from "@ui/ListItem/ListItemWrapper";
import { IUI } from "@ui/Interface";
import ListItemCaption from "@ui/ListItem/Caption/ListItemCaption";
import { Icon } from "@ui/index";
import ListItemSubCaption from "@ui/ListItem/Caption/ListItemSubCaption";
import Image from "@ui/Image/Image";

const ListItem = ({ imageName, caption, subCaption, arrow, ...props }: IUI.ListItem) => {
	return (
		<ListItemWrapper
			display={imageName && <Image name={imageName}/>}
			caption={caption && <ListItemCaption {...caption} />}
			subCaption={subCaption && <ListItemSubCaption {...subCaption} />}
			arrow={arrow}
			{...props}
		/>
	);
};

export default ListItem;