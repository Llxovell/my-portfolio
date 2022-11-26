export default function Background(props) {
	return (
		<div className="background-text-container">
			<div className="background-text">
				{props.text ? props.text : "</Home>"}
			</div>
		</div>
	);
}
