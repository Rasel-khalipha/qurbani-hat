import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
	return (
		<>
			<div className="w-11/12 mx-auto ">
				<div className="relative mt-6 min-h-75 md:min-h-150 overflow-hidden rounded-lg">
					{/* Background Image */}
					<Image
						src="/banner.png"
						alt="Qurbani Cow Banner"
						fill
						priority
						className="object-cover object-[70%_center] md:object-center"
					/>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-linear-to-r from-[#0F5027] via-transparent to-transparent h-auto z-10" />

					{/* Content */}
					<div className="relative z-20 text-white h-full flex flex-col justify-center ml-5 lg:ml-20 py-38">
						<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 capitalize max-w-300 lg:max-w-[600px] leading-tight">
							Find The Perfect animal for your qurbani.
						</h1>

						<p className="text-xs md:text-lg lg:text-xl max-w-xl">
							Browse Healthy and Quality Animals for Your Qurbani. Find the
							Perfect Sacrifice for Your Religious Observance. Shop Now for a
							Seamless Qurbani Experience.
						</p>
						<Link
							href="/animals"
							className="flex items-center gap-2 group bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit cursor-pointer mt-6 transition-colors duration-300"
						>
							Browse Animals{" "}
							<FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
