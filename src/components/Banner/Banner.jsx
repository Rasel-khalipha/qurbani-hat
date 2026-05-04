import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
	return (
		<>
			<div className="w-11/12 mx-auto mt-20">
				<div className="relative overflow-hidden rounded-lg">
					<Image
						src="/banner.png"
						alt="Qurbani Cow Banner"
						width={1600}
						height={800}
						priority
						className="object-contain w-full h-auto"
					/>

					<div className="absolute inset-0 bg-linear-to-r from-[#0F5027]/95 via-[#0F5027]/50 to-transparent md:from-[#0F5027] md:via-transparent md:to-transparent z-10" />

					<div className="absolute inset-0 z-20 flex items-center">
						<div className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-[90%] sm:max-w-[75%] lg:max-w-[55%] pt-2 pb-2">
							<h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white">
								Find The Perfect Animal For Your Qurbani
							</h1>

							<p className="mt-2 sm:mt-4 text-[11px] sm:text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed line-clamp-2 md:line-clamp-none">
								Browse healthy and quality animals for your Qurbani. Find the
								perfect sacrifice for your religious observance with a seamless
								booking experience.
							</p>

							<Link
								href="/animals"
								className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-white transition-all duration-300 group"
							>
								Browse Animals
								<FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
