import clsx from "clsx";
import Card from "../components/Card";

const Bar = ({ percentage }) => {
	return (
		<div className="relative w-full h-2 rounded-full bg-gray-300">
			<div
				className={clsx(
					"absolute left-0 top-0 h-2",
					"rounded-full bg-blue-400"
				)}
				style={{ width: `${percentage}%` }}
			></div>
		</div>
	);
};

const Stats = ({ title, data }) => {
	return (
		//
		// font-weight: 700;
		// font-size: 18px;
		// line-height: 22px;
		// text-transform: uppercase;
		<Card className="flex flex-col w-full col-span-2 lg:col-span-1">
			<h2 className="font-bold uppercase">{title}</h2>
			<section className="w-full">
				{data.map(({ text, percentage }) => {
					return (
						<div
							key={`stats-${title}-${text}`}
							className="flex flex-row items-center my-2"
						>
							<span className="w-4/6 text-sm">{text}</span>
							<Bar percentage={percentage} />
						</div>
					);
				})}
			</section>
		</Card>
	);
};

export default Stats;
