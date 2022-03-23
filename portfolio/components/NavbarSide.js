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
					<a className="nav-link" href="#home">
						Home
					</a>
				</li>
				<li
					className={`nav-item ${checkProjectsSelected()} ${
						props.selected == "about" ? "selected-color" : "unselected-color"
					}`}
				>
					<a className="nav-link" href="#about">
						About
					</a>
				</li>
				<li
					className={`nav-item ${
						props.selected == "projects"
							? "selected-color-alt nav-item-alt"
							: "unselected-color"
					}`}
				>
					<a className="nav-link" href="#projects">
						Projects
					</a>
				</li>
				<li
					className={`nav-item ${checkProjectsSelected()} ${
						props.selected == "contact" ? "selected-color" : "unselected-color"
					}`}
				>
					<a className="nav-link" href="#contact">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
