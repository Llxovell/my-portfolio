import { useState } from "react";

export default function GithubSVG() {
	const [stroke, setStroke] = useState(false);

	function handleMouseHover(isHovered) {
		setStroke(isHovered);
	}
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => {
				handleMouseHover(true);
			}}
			onMouseLeave={() => {
				handleMouseHover(false);
			}}
		>
			<path
				d="M42.6666 58.6667V48.3467C42.7666 47.0751 42.5948 45.7968 42.1626 44.5968C41.7304 43.3967 41.0477 42.3025 40.1599 41.3867C48.5333 40.4533 57.3333 37.28 57.3333 22.72C57.3326 18.9969 55.9004 15.4165 53.3333 12.72C54.5489 9.46268 54.4629 5.86226 53.0933 2.66666C53.0933 2.66666 49.9466 1.73333 42.6666 6.61333C36.5546 4.95685 30.1119 4.95685 23.9999 6.61333C16.7199 1.73333 13.5733 2.66666 13.5733 2.66666C12.2036 5.86226 12.1176 9.46268 13.3333 12.72C10.7469 15.4365 9.31331 19.0492 9.33325 22.8C9.33325 37.2533 18.1333 40.4267 26.5066 41.4667C25.6292 42.3733 24.9526 43.4544 24.5207 44.6398C24.0889 45.8252 23.9114 47.0882 23.9999 48.3467V58.6667M23.9999 50.6667C10.6666 54.6667 10.6666 44 5.33325 42.6667L23.9999 50.6667Z"
				stroke={stroke ? "#D55672" : "#F7F8F9"}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
