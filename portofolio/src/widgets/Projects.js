import clsx from "clsx";
import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Projects = ({ _tags = [], _projects = [] }) => {
	const [display, setDisplay] = useState(_projects);
	const [filter, setFilter] = useState(null);

	function activate(f) {
		const newFilter = filter === f ? null : f;
		setFilter(newFilter);

		if (newFilter) {
			const projects = _projects.filter((p) => p.tags.includes(f));
			setDisplay(projects);
		} else {
			setDisplay(_projects);
		}
	}

	return (
		<section className="col-span-2">
			<Card className={clsx("flex flex-col w-full mb-8")}>
				<h2 className="section">Projects ({_projects.length})</h2>
				<section className="flex flex-row gap-4 mt-4">
					{_tags.map((tag) => (
						<Button
							key={`filter-${tag}`}
							variant={tag === filter ? "default" : "outline"}
							onClick={() => activate(tag)}
						>
							{tag}
						</Button>
					))}
				</section>
			</Card>
			{display.map(
				({ thumbnail, name, tags, desc, demo, code }, index) => (
					<Card
						key={`project-${name}`}
						className={clsx(
							"project relative flex flex-col md:flex-row gap-8",
							index > 0 && "mt-8"
						)}
					>
						<section>
							<img
								className="rounded-md border"
								src={thumbnail}
								alt={name}
							/>
						</section>
						<article>
							<section className="flex flex-row gap-2 text-gray-500 text-sm">
								{tags.map((tag) => (
									<span key={`project-${name}-${tag}`}>
										#{tag}
									</span>
								))}
							</section>
							<h3 className="mt-2 text-xl">{name}</h3>
							<p className="mt-2 text-gray-600 text-sm limit-text lines-4 md:lines-2 lg:lines-4 lg:leading-6 xl:lines-2">
								{desc}
							</p>
							<section
								className={clsx(
									"md:absolute md:bottom-8 md:mt-0",
									"flex flex-row gap-8 mt-4"
								)}
							>
								<a href={demo}>
									<Button>Demo</Button>
								</a>
								<a href={code}>
									<Button variant="outline">Code</Button>
								</a>
							</section>
						</article>
					</Card>
				)
			)}
		</section>
	);
};

export default Projects;
