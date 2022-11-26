import PageTemplate from "../components/PageTemplate";
import ProjectsContent from "../components/ProjectsContent";
import { useState } from "react";

import home_page_PNG from "../assets/home_page.png";
import space_tour_PNG from "../assets/space_tour.png";

export default function Projects() {
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
			<PageTemplate
				third="#6A66A3"
				text="</Projects>"
				selected="projects"
				content={projects[count]}
				logoColor
			/>
		</>
	);
}
