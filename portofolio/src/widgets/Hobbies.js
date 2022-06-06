import clsx from "clsx";
import Card from "../components/Card";

const Hobbies = ({ entries }) => {
	return (
		<Card className="flex flex-col col-span-2 xl:col-span-3">
			<h2 className="section mb-4">Hobbies</h2>
			<section className="description flex flex-col lg:flex-row gap-8">
				{entries.map(({ name, desc, thumbnail }) => {
					return (
						<article
							key={`hobby-${name}`}
							className="flex flex-col basis-2/6"
						>
							<div
								className={clsx(
									"relative h-min sm:h-48 lg:h-32",
									"border rounded-md overflow-hidden"
								)}
							>
								<img src={thumbnail} alt={name} />
							</div>
							<h3 className="mt-4 font-semibold">{name}</h3>
							<p>{desc}</p>
						</article>
					);
				})}
			</section>
		</Card>
	);
};

export default Hobbies;
