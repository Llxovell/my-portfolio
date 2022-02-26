import Link from "next/link";

export default function NavbarSide(props) {
	function checkProjectsSelected() {
		return props.selected == "projects" ? "nav-item-alt" : null;
	}

	return (
		<nav className={props.handleClick ? "navbar-modal" : "navbar-side"}>
			<ul className="navbar">
				<li
					className={`nav-item ${checkProjectsSelected()} ${
						props.selected == "home" ? "selected-color" : "unselected-color"
					}`}
				>
					<Link href="/">
						<a className="nav-link">Home</a>
					</Link>
				</li>
				<li
					className={`nav-item ${checkProjectsSelected()} ${
						props.selected == "about" ? "selected-color" : "unselected-color"
					}`}
				>
					<Link href="/about">
						<a className="nav-link">About</a>
					</Link>
				</li>
				<li
					className={`nav-item ${
						props.selected == "projects"
							? "selected-color-alt nav-item-alt"
							: "unselected-color"
					}`}
				>
					<Link href="/projects">
						<a className="nav-link">Projects</a>
					</Link>
				</li>
				<li
					className={`nav-item ${checkProjectsSelected()} ${
						props.selected == "contact" ? "selected-color" : "unselected-color"
					}`}
				>
					<Link href="/contact">
						<a className="nav-link">Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
