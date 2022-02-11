import MenuHorizontalSvg from "./MenuHorizontalSvg";
import Link from "next/link";

export default function NavbarTop(props) {
	return (
		<div className="navbar-top">
			<div className="logo">
				<Link href="/">
					<a>
						<span>L</span>
						<span>M</span>
					</a>
				</Link>
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
