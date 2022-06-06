import Card from "../components/Card";

const Blog = ({ title, thumbnail, stub, link }) => {
	return (
		<Card className="flex flex-col relative w-full col-span-2 overflow-hidden text-black sm:text-white">
			<section className="flex flex-col z-10">
				<section>
					<span className="text-gray-600 sm:text-gray-300">Blog</span>
					<h2 className="font-semibold text-2xl">{title}</h2>
				</section>
				<article className="description w-5/6 mt-8 font-medium text-sm">
					{ stub }
				</article>
				<a href={link} className="mt-4 font-semibold text-sm text-blue-500">
					link
				</a>
			</section>
			<div className="absolute w-full left-0 top-0 overflow-hidden bg-black hidden sm:block">
				<img className="w-full h-auto opacity-25" src={thumbnail} alt="blog background" />
			</div>
		</Card>
	);
};

export default Blog;
