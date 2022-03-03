import projects_style from "../styles/Projects.module.css";
import ArrowSVG from "./ArrowSVG";
import Image from "next/image";
import todo_list_PNG from "../assets/todo_list.png";

export default function ProjectsContent(props) {
	return (
		<div className={`default-container ${projects_style.projects_container}`}>
			<h1 className={projects_style.title}>
				{props.title ? (
					<>
						props.title{" "}
						<span className={projects_style.title_highlight}>
							{props.title_highlight}
						</span>
					</>
				) : (
					<>
						Todo{" "}
						<span className={projects_style.title_highlight}>{"List"}</span>
					</>
				)}
			</h1>
			<h2 className={projects_style.subtitle}>
				{props.subtitle
					? props.subtitle
					: "A simple todolist where you can add and remove items, with a drag and drop feature."}
			</h2>
			<button className={projects_style.button}>
				<ArrowSVG />
			</button>
			<div
				className={`default-text-container ${projects_style.image_container}`}
			>
				<Image
					className={projects_style.img}
					src={props.img_src ? props.img_src : todo_list_PNG}
					height="300px"
					width="300px"
				/>
			</div>
		</div>
	);
}
