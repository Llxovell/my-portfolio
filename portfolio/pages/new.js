import HomeContent from "../components/HomeContent";
import AboutContent from "../components/AboutContent";
import ContactContent from "../components/ContactContent";
import ProjectsContent from "../components/ProjectsContent";
import NavbarTop from "../components/NavbarTop";
import BackgrounText from "../components/BackgroundText";

export default function New() {
	return (
		<>
			<BackgrounText />
			<NavbarTop />
			<HomeContent />
			<AboutContent />
			<ProjectsContent />
			<ContactContent />
		</>
	);
}
