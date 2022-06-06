import clsx from "clsx";

const Button = ({ children, variant="default", onClick, className }) => {
	return (
		<button
			className={clsx(
				"px-4 py-1 border border-blue-600 rounded-md transition-colors",
				variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
				variant === "outline" && "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
