import NavbarTop from "../components/NavbarTop";
import NavbarSide from "../components/NavbarSide";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import BackgroundText from "../components/BackgroundText";
import Modal from "../components/Modal";
import { useState } from "react";

export default function PageTemplate(props) {
	const [handleClick, sethandleClick] = useState(false);

	return (
		<>
			<Modal handleClick={handleClick} />
			<div className="page-wrapper">
				<NavbarTop
					first={props.first}
					second={props.second}
					third={props.third}
					fourth={props.fourth}
					sethandleClick={sethandleClick}
					handleClick={handleClick}
					logoColor={props.logoColor}
				/>
				<div className="main-wrapper">
					<NavbarSide selected={props.selected} handleClick={handleClick} />
					<ContentContainer content={props.content} />
					<BackgroundText text={props.text} />
				</div>
				<Footer />
			</div>
		</>
	);
}
