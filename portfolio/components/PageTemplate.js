import NavbarTop from "../components/NavbarTop";
import NavbarSide from "../components/NavbarSide";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import BackgroundText from "../components/BackgroundText";

export default function PageTemplate(props) {
	return (
		<>
			<div className="page-wrapper">
				<NavbarTop
					first={props.first}
					second={props.second}
					third={props.third}
					fourth={props.fourth}
				/>
				<div className="main-wrapper">
					<NavbarSide selected={props.selected} />
					<ContentContainer content={props.content} />
					<BackgroundText text={props.text} />
				</div>
				<Footer />
			</div>
		</>
	);
}
