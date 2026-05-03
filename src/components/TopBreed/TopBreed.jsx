import TopBreedUI from "../cardUI/TopBreedUI/TopBreedUI";

const TopBreed = async () => {
	const res = await fetch("http://localhost:3000/animal.json", {
		cache: "no-store",
	});
	const animals = await res.json();
	console.log(animals);

	const uniqueBreeds = animals.filter(
		(item, index, self) =>
			index === self.findIndex((a) => a.breed === item.breed),
	);

	return (
		<>
			<div className="w-11/12 mx-auto mt-25">
				{" "}
				<TopBreedUI uniqueBreeds={uniqueBreeds} />{" "}
			</div>
		</>
	);
};

export default TopBreed;
