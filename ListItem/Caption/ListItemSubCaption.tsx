import ListItemBaseCaption from "@ui/ListItem/Caption/ListItemBaseCaption";
import { IUI } from "@ui/Interface";

const ListItemSubCaption = (props: IUI.ListItemSubCaption) => {
	return (
		<ListItemBaseCaption {...props} amount={""} justify={"end"} textAlign={"right"}/>
	);
};

export default ListItemSubCaption;