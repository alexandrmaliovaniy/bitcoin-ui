import { Row, Tag } from "@ui/index";
import { IUI } from "@ui/Interface";
import { useTheme } from "@hooks/Theme/ThemeHook";
import styles from "./InlineTabs.module.scss";

const InlineTabs = ({ value, tabs, size, onMutation, disabled, ...props }: IUI.InlineTabs) => {

	const { neutral } = useTheme();

	return (
		<Row
			className={styles.InlineTabs}
			inline
			background={neutral("neutral3")}
			{...props}
		>
			{
				tabs.map((tab, index) => (
					<Tag
						key={`${tab}${index}`}
						outlined
						size={size}
						background={index === value ? disabled ? neutral("neutral1") : neutral("white") : "transparent"}
						style={{
							border: "none",
							cursor: "pointer"
						}}
						onClick={() => !disabled && index !== value && onMutation && onMutation(index)}
					>
						{tab}
					</Tag>
				))
			}
		</Row>
	);
};

export default InlineTabs;