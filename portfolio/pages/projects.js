import PageTemplate from "../components/PageTemplate";
import ProjectsContent from "../components/ProjectsContent";

export default function Projects() {
	return (
		<>
			<PageTemplate
				third="#6A66A3"
				text="</Projects>"
				selected="projects"
				content={<ProjectsContent />}
				logoColor
			/>
		</>
	);
}
