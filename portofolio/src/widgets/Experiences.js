import Card from "../components/Card";

const Entry = ({ time, role, company, desc }) => {
	return (
		<article className="flex mt-4 w-full h-full gap-4">
			<section className="mt-4">
				<img className="w-32" src={company} alt="company logo" />
			</section>
			<section className="description">
				<span className="font-medium text-sm text-gray-500">
					{time}
				</span>
				<h3 className="mt-2 font-semibold">{role}</h3>
				<p className="mt-4">{desc}</p>
			</section>
		</article>
	);
};

const Experiences = ({ entries }) => {
	return (
		<Card className="flex flex-col col-span-2 lg:col-span-1 row-span-1">
			<h2 className="section">Experiences</h2>
			<section>
				{entries.map((entry) => {
					const { time, role, company } = entry;
					return (
						<Entry key={`${time}-${role}-${company}`} {...entry} />
					);
				})}
			</section>
		</Card>
	);
};

export default Experiences;
