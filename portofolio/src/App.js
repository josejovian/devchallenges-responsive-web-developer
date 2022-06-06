import "./App.css";
import Identity from "./widgets/Identity";
import { MdEmail, MdPhone } from "react-icons/md";
import Stats from "./widgets/Stats";
import clsx from "clsx";
import Blog from "./widgets/Blog";
import Experiences from "./widgets/Experiences";
import Projects from "./widgets/Projects";
import Hobbies from "./widgets/Hobbies";

function App() {
	const identity = {
		photo: "./person.jpg",
		name: "Billy Pearson",
		role: "Front-end Developer",
		contacts: [
			{
				icon: <MdEmail />,
				text: "billypearson@email.com",
			},
			{
				icon: <MdPhone />,
				text: "(+603) 546 624 342",
			},
		],
		entries: [
			"Self-motivated developer, who is willing to learn and create outstanding UI applications.",
			"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
		],
	};

	const stats = {
		title: "Front End",
		data: [
			{
				text: "React",
				percentage: 60,
			},
			{
				text: "Javascript",
				percentage: 70,
			},
			{
				text: "CSS",
				percentage: 50,
			},
		],
	};

	const blog = {
		title: "How to organize your CSS",
		thumbnail:
			//Photo by Eastman Childs on Unsplash
			"./blog-thumbnail.jpg",
		stub: (
			<>
				<p>
					In this article I tell the story about Proin eu justo sit
					amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a
					luctus mi.
				</p>
				<p>
					Donec aliquam est dui, vel vestibulum diam sollicitudin id.
					Quisque feugiat malesuada molestie.
				</p>
			</>
		),
		link: "#",
	};

	const experiences = [
		{
			time: "Feb 2017 - Current",
			role: "Front-end Developer",
			company: "https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png",
			desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
		},
		{
			time: "Aug 2016 - Feb 2018",
			role: "Full-stack Developer",
			company: "https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png",
			desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
		},
	];

	const projects = [{
		thumbnail: "./recipe-blog.png",
		tags: ["html", "css"],
		name: "Recipe Blog",
		desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
		demo: "#",
		code: "#",
	}, {
		thumbnail: "./my-gallery.png",
		tags: ["html", "css"],
		name: "My Gallery",
		desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
		demo: "#",
		code: "#",
	}, {
		thumbnail: "./checkout-page.png",
		tags: ["html", "css", "javascript"],
		name: "Checkout Page",
		desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
		demo: "#",
		code: "#",
	}];

	const tags = ["html", "css", "javascript"];

	const hobbies = [{
		//Photo by Alexey Savchenko on Unsplash
		thumbnail: "./hobby-1.jpg",
		name: "Hobby 1",
		desc: "Quisque feugiat malesuada molestie."
	}, {
		//Photo by Kevin McCutcheon on Unsplash
		thumbnail: "./hobby-2.jpg",
		name: "Hobby 2",
		desc: "Quisque feugiat malesuada molestie."
	}, {
		//Photo by Jonny Kennaugh on Unsplash
		thumbnail: "./hobby-3.jpg",
		name: "Hobby 3",
		desc: "Quisque feugiat malesuada molestie."
	}]

	return (
		<div>
			<main
				className={clsx(
					"py-8 px-8 sm:px-8 md:px-16 lg:px-16 xl:px-32 2xl:px-64",
					"grid grid-cols-2 xl:grid-cols-3 gap-8",
				)}
			>
				<Identity {...identity} />
				<Stats {...stats} />
				<Blog {...blog} />
				<Experiences entries={experiences} />
				<Projects _tags={tags} _projects={projects} />
				<Hobbies entries={hobbies} />
			</main>
			<footer>
				created by <a href="https://github.com/josejovian">josejovian</a> - <a href="https://devchallenges.io/">devChallenges.io</a>
			</footer>
		</div>
	);
}

export default App;
