import Link from "next/link";

export default function NavbarSide() {
	return (
		<nav className="navbar-side">
			<ul className="navbar">
				<li className="nav-item">
					<Link href="/">
						<a className="nav-link">Home</a>
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/about">
						<a className="nav-link">About</a>
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/projects">
						<a className="nav-link">Projects</a>
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/contact">
						<a className="nav-link">Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
