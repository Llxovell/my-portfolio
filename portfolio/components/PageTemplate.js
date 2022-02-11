import NavbarTop from "../components/NavbarTop";
import NavbarSide from "../components/NavbarSide";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import BackgroundText from "../components/BackgroundText";

export default function PageTemplate(props) {
	return (
		<>
			<BackgroundText text={props.text} />
			<NavbarTop />
			<div className="main-wrapper">
				<NavbarSide />
				<ContentContainer />
			</div>
			<Footer />
		</>
	);
}
