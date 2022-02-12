import PageTemplate from "../components/PageTemplate";
import AboutContent from "../components/AboutContent";

export default function About() {
	return (
		<>
			<PageTemplate
				second="#D55672"
				text="</About>"
				selected="about"
				content={<AboutContent />}
			/>
		</>
	);
}
