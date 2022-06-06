import clsx from "clsx"

const Card = ({ children, className }) => {
	return (
		<div className={clsx("p-8 h-min bg-white shadow-md rounded-md text-lg", className)}>
			{ children }
		</div>
	);
}

export default Card;