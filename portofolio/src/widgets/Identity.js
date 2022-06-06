import clsx from "clsx";
import Card from "../components/Card";

const Contact = ({ icon, children }) => {
	return (
		<div className="flex flex-row items-center">
			<span className="mr-4">{icon}</span>
			<span className="font-medium text-gray-600">{children}</span>
		</div>
	);
};

const Identity = ({ photo, name, role, contacts, entries }) => {
	return (
		<Card
			className={clsx(
				"flex flex-col md:flex-row w-full",
				"col-span-2 xl:col-span-3",
			)}
		>
			<img className="w-full md:w-64 mr-8 rounded-md" src={photo} alt="personal face" />
			<article className="w-full">
				<section className={clsx("flex flex-col lg:flex-row justify-between", "mt-4 md:mt-0")}>
					<article className="flex flex-col">
						<h1 className="font-semibold lg:text-2xl text-lg">{name}</h1>
						<span className="text-gray-700 lg:text-lg text-sm">{role}</span>
					</article>
					<article className="flex flex-col mt-2 lg:mt-0 lg:text-base text-sm">
						{contacts.map(({ icon, text }) => (
							<Contact key={`contact-${text}`} icon={icon}>{text}</Contact>
						))}
					</article>
				</section>
				<section className="description mt-4 font-medium text-gray-600 ">
					{entries.map((entry) => (
						<p key={entry}>{entry}</p>
					))}
				</section>
			</article>
		</Card>
	);
};

export default Identity;
