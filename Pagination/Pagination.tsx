import { IUI } from "@ui/Interface";
import { PaginationDot, Row } from "@ui/index";

const Pagination = ({ count, value, onMutation, size, disabled, ...props }: IUI.Pagination) => {
	const dots = [];
	for (let i = 0; i < count; i++) {
		dots.push(
			<PaginationDot
				value={value === i}
				onMutation={() => !disabled && onMutation && onMutation(i)}
				size={size}
			/>
		);
	}
	return (
		<Row inline gap={20} {...props}>
			{dots}
		</Row>
	);
};

export default Pagination;