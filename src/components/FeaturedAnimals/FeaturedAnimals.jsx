import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimalCard from "../cardUI/AnimalCard/AnimalCard";

const FeaturedAnimals = async () => {
	const res = await fetch("https://qurbani-hat-two.vercel.app/animal.json");
	const animals = await res.json();
	console.log(animals);
	const cow = animals.filter((a) => a.type.toLowerCase() === "cow").slice(0, 2);
	const goat = animals
		.filter((a) => a.type.toLowerCase() === "goat")
		.slice(0, 2);
	return (
		<>
			<div className="w-11/12 mx-auto">
				<div className="flex items-center justify-between mt-10 mb-6">
					<h2 className="font-bold text-2xl text-[#0F5027]">
						Featured Animals
					</h2>
					<Link
						href="/animals"
						className="flex items-center gap-2 group text-[#0F5027] text-lg font-bold py-2 px-4 rounded w-fit cursor-pointer mt-6 transition-colors duration-300"
					>
						View All{" "}
						<FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
					</Link>
				</div>
				<div>
					{[...cow, ...goat].map((animal) => (
						<AnimalCard key={animal.id} animal={animal} />
					))}
				</div>
			</div>
		</>
	);
};

export default FeaturedAnimals;
