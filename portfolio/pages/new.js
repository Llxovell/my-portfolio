import HomeContent from "../components/HomeContent";
import AboutContent from "../components/AboutContent";
import ContactContent from "../components/ContactContent";
import ProjectsContent from "../components/ProjectsContent";
import NavbarTop from "../components/NavbarTop";
import BackgrounText from "../components/BackgroundText";
import { useState } from "react/cjs/react.production.min";

export default function New() {
	const projects = [
		<ProjectsContent />,
		<ProjectsContent
			title="Home"
			title_highlight="Page"
			subtitle="A landing page with features that can be tabbed through."
		/>,
		<ProjectsContent
			title="Space"
			title_highlight="Tour"
			subtitle="A web app containing information about a space tourism experience."
		/>,
	];

	return (
		<>
			<BackgrounText />
			<NavbarTop />
			<HomeContent />
			<AboutContent />
			<ProjectsContent content={projects[0]} />
			<ProjectsContent
				title="Home"
				title_highlight="Page"
				subtitle="A landing page with features that can be tabbed through."
			/>
			<ProjectsContent
				title="Space"
				title_highlight="Tour"
				subtitle="A web app containing information about a space tourism experience."
			/>
			<ContactContent />
		</>
	);
}
