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
				<div className="main-wrapper">
					{props.navbar ? props.navbar : <div></div>}
					<ContentContainer content={props.content} />
					<BackgroundText text={props.text} />
				</div>
			</div>
		</>
	);
}
