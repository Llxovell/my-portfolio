import MenuHorizontalSvg from "./MenuHorizontalSvg";
import MenuSVG from "./MenuSVG";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarTop(props) {
	function handleChange() {
		props.sethandleClick(!props.handleClick);
	}

	return (
		<div className="navbar-top">
			<div className="logo">
				<a href="home">
					<span>L</span>
					<span className={props.logoColor ? "logo-alt" : "logo-default"}>
						M
					</span>
				</a>
			</div>
			<div
				className="menu"
				onClick={() => {
					handleChange();
				}}
			>
				<MenuSVG
					first={props.first}
					second={props.second}
					third={props.third}
					fourth={props.fourth}
				/>
			</div>
			<div className="menu-horizontal">
				<MenuHorizontalSvg
					first={props.first}
					second={props.second}
					third={props.third}
					fourth={props.fourth}
				/>
			</div>
		</div>
	);
}
