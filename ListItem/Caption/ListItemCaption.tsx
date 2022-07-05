import ListItemBaseCaption from "@ui/ListItem/Caption/ListItemBaseCaption";
import { IUI } from "@ui/Interface";

const ListItemCaption = (props: IUI.ListItemCaption) => {
	return (
		<ListItemBaseCaption {...props} small={false}/>
	);
};

export default ListItemCaption;