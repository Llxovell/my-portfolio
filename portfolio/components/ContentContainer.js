export default function ContentContainer(props) {
	return (
		<div className="content-container">
			{props.content ? (
				props.content
			) : (
				<div className="default-container"></div>
			)}
		</div>
	);
}
