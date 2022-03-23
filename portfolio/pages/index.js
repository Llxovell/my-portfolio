import PageTemplate from "../components/PageTemplate";
import HomeContent from "../components/HomeContent";
import AboutContent from "../components/AboutContent";
import ProjectsContent from "../components/ProjectsContent";
import ContactContent from "../components/ContactContent";
import NavbarTop from "../components/NavbarTop";
import NavbarSide from "../components/NavbarSide";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useState } from "react";

import home_page_PNG from "../assets/home_page.png";
import space_tour_PNG from "../assets/space_tour.png";

export default function Home(props) {
	const [handleClick, sethandleClick] = useState(false);

	const [count, setCount] = useState(0);
	const projects = [
		<ProjectsContent count={count} setCount={setCount} />,
		<ProjectsContent
			title="Home"
			title_highlight="Page"
			subtitle="A landing page with features that can be tabbed through."
			img_src={home_page_PNG}
			count={count}
			setCount={setCount}
		/>,
		<ProjectsContent
			title="Space"
			title_highlight="Tour"
			subtitle="A web app containing information about a space tourism experience."
			img_src={space_tour_PNG}
			count={count}
			setCount={setCount}
		/>,
	];
	return (
		<>
			<NavbarTop
				first={props.first}
				second={props.second}
				third={props.third}
				fourth={props.fourth}
				sethandleClick={sethandleClick}
				handleClick={handleClick}
				logoColor={props.logoColor}
			/>
			<PageTemplate
				navbar={<NavbarSide />}
				first="#D55672"
				selected="home"
				content={<HomeContent />}
			/>
			<PageTemplate
				second="#D55672"
				text="</About>"
				selected="about"
				content={<AboutContent />}
			/>
			<PageTemplate
				third="#6A66A3"
				text="</Projects>"
				selected="projects"
				content={projects[count]}
				logoColor
			/>
			<PageTemplate
				fourth="#D55672"
				text="</Contact>"
				selected="contact"
				content={<ContactContent />}
			/>
			<Footer />
		</>
	);
}
