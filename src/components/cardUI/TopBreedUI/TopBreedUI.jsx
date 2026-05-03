"use client";
import Image from "next/image";
import Slider from "react-slick";
const TopBreedUI = ({ uniqueBreeds }) => {
	const SliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<>
			<div>
				<section className="py-10 text-center">
					<h2 className="text-3xl font-bold mb-6 text-[#0F5027]">Top Breeds</h2>

					<div className="mx-auto w-11/12 px-4">
						<Slider {...SliderSettings}>
							{uniqueBreeds.map((breed) => (
								<div
									key={breed.id}
									className="cursor-pointer group text-center"
								>
									<div className="flex justify-center items-center mx-auto relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-green-500 transition">
										<Image
											src={breed.image}
											alt={breed.breed}
											fill
											className="object-contain group-hover:scale-110 transition duration-300"
										/>
									</div>

									<p className="mt-3 text-sm font-medium">{breed.breed}</p>
								</div>
							))}
						</Slider>
					</div>
				</section>
			</div>
		</>
	);
};

export default TopBreedUI;
