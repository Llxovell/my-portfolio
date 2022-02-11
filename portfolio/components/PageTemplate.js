import NavbarTop from "../components/NavbarTop";
import NavbarSide from "../components/NavbarSide";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import BackgroundText from "../components/BackgroundText";

export default function PageTemplate(props) {
	return (
		<>
			<div className="page-wrapper">
				<NavbarTop />
				<div className="main-wrapper">
					<NavbarSide />
					<ContentContainer />
					<BackgroundText text={props.text} />
				</div>
				<Footer />
			</div>
		</>
	);
}
