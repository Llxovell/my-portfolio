import { useEffect, useState } from "react";
import NavbarSide from "./NavbarSide";

export default function Modal(props) {
	return (
		<div className={props.handleClick ? "modal" : "hideModal"}>
			<NavbarSide selected={props.selected} />
		</div>
	);
}
