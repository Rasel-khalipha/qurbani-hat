import Banner from "@/components/Banner/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips/QurbaniTips";

export default function Home() {
	return (
		<>
			<div>
				<Banner />
				<FeaturedAnimals />
				<QurbaniTips />
			</div>
		</>
	);
}
