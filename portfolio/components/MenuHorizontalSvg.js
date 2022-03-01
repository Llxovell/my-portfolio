export default function MenuHorizontalSvg(props) {
	return (
		<svg
			width="260"
			height="7"
			viewBox="0 0 260 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M259.667 3.5C259.667 2.11933 258.872 1 257.892 1H224.774C223.794 1 223 2.11933 223 3.5C223 4.88067 223.794 6 224.774 6H257.892C258.872 6 259.667 4.88067 259.667 3.5Z"
				fill={props.fourth ? props.fourth : "#F8F7F9"}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M198.667 3.33333C198.667 1.49244 197.439 0 195.925 0H144.742C143.228 0 142 1.49244 142 3.33333C142 5.17422 143.228 6.66667 144.742 6.66667H195.925C197.439 6.66667 198.667 5.17422 198.667 3.33333Z"
				fill={props.third ? props.third : "#F8F7F9"}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M117.667 3.33333C117.667 1.49244 116.439 0 114.925 0H63.7419C62.2276 0 61 1.49244 61 3.33333C61 5.17422 62.2276 6.66667 63.7419 6.66667H114.925C116.439 6.66667 117.667 5.17422 117.667 3.33333Z"
				fill={props.second ? props.second : "#F8F7F9"}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M36.6667 3.5C36.6667 2.1193 35.8723 1 34.8925 1H1.77419C0.794342 1 0 2.1193 0 3.5C0 4.8807 0.794342 6 1.77419 6H34.8925C35.8723 6 36.6667 4.8807 36.6667 3.5Z"
				fill={props.first ? props.first : "#F8F7F9"}
			/>
		</svg>
	);
}
