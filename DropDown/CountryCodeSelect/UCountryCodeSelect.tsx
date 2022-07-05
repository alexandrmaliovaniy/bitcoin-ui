import UDropDown from "@ui/DropDown/UDropDown";
import { IUI } from "@ui/Interface";
import { useState } from "react";
// eslint-disable-next-line import/extensions
import CountryCode from "./CountryCode.json";


const UCountryCodeSelect = (props: IUI.UCountryCodeSelect) => {
	return (
		<UDropDown {...props} list={CountryCode} value={CountryCode[0]}/>
	);
};

export default UCountryCodeSelect;