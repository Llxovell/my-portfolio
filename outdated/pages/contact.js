import PageTemplate from "../components/PageTemplate";
import ContactContent from "../components/ContactContent";

export default function Contact() {
	return (
		<>
			<PageTemplate
				fourth="#D55672"
				text="</Contact>"
				selected="contact"
				content={<ContactContent />}
			/>
		</>
	);
}
