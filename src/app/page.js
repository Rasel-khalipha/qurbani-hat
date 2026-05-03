import Banner from "@/components/Banner/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips/QurbaniTips";
import TopBreed from "@/components/TopBreed/TopBreed";

export default function Home() {
	return (
		<>
			<div>
				<Banner />
				<FeaturedAnimals />
				<QurbaniTips />
				<TopBreed />
			</div>
		</>
	);
}
