import contact_style from "../styles/Contact.module.css";
import CopySVG from "./CopySVG";

export default function ContactContent() {
	function ContactInput(props) {
		return (
			<>
				<h2 className={contact_style.input_caption}>{props.caption}</h2>
				{props.textarea ? (
					<textarea
						className={`default-text-container ${contact_style.contact_input}`}
						placeholder={props.placeholder}
						cols="40"
						rows="5"
					></textarea>
				) : (
					<input
						type="text"
						className={`default-text-container ${contact_style.contact_input}`}
						placeholder={props.placeholder}
					/>
				)}
			</>
		);
	}

	return (
		<div
			id="contact"
			className={`default-container ${contact_style.contact_container}`}
		>
			<h1 className={contact_style.title}>
				Get in <span>touch</span>
			</h1>
			<div className={`default-text-container ${contact_style.email_link}`}>
				<p>levellmack@gmail.com</p>
				<CopySVG />
			</div>
			<form
				className={contact_style.input_form}
				action="mailto:levellmack@gmail.com"
				method="post"
				encType="multipart/form-data"
			>
				<ContactInput caption="Name" placeholder="Full name" />
				<ContactInput caption="Email" placeholder="Email address" />
				<ContactInput caption="Subject" placeholder="Email subject" />
				<ContactInput
					caption="Message"
					placeholder="Your message here..."
					textarea
				/>
				<input type="submit" className={contact_style.submit} value="SEND" />
			</form>
		</div>
	);
}
