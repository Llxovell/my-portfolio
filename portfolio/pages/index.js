import PageTemplate from "../components/PageTemplate";
import HomeContent from "../components/HomeContent";

export default function Home() {
	return (
		<>
			<PageTemplate first="#D55672" selected="home" content={<HomeContent />} />
		</>
	);
}
