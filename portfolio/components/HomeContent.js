import home_style from "../styles/Home.module.css";
export default function HomeContent() {
	return (
		<div id="home" className={`default-container ${home_style.home_container}`}>
			<h1 className={home_style.title}>
				Levell <span>Mack</span>
			</h1>

			<h2 className={home_style.subtitle}>Frontend Developer</h2>

			<div
				className={`default-text-container ${home_style.paragraph_container} `}
			>
				<p className={home_style.paragraph_text}>
					Watching my code come to life, fuels my passion for frontend
					development.
				</p>
			</div>
		</div>
	);
}
