import Image from "next/image";
import Link from "next/link";
import { ImLocation } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "All-Animals", href: "/all-animals" },
	];
	return (
		<>
			<div className="bg-[#0F5027] pt-20 pb-4">
				<div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div>
						<div className="flex items-center gap-2.5">
							<Image src="/footerlogo.png" alt="Logo" width={60} height={60} />
							<h3 className=" font-semibold text-2xl text-[#ffffff]">
								<span className="text-[#ffffff] font-extrabold">Qurbani</span>
								Hat
							</h3>
						</div>
						<p className="text-[#ffffff] mt-4 text-sm">
							Your trusted marketplace for qurbani animals. We connect with
							healthy, high-quality livestock for your qurbani needs. Ensure the
							best experience for smooth booking experiences .
						</p>
					</div>

					<div className="mt-6.25">
						<h4 className="font-bold text-xl text-white">About Us</h4>
						<p className="text-[#ffffff] text-sm mt-8">
							Qurbani Hat is a leading online platform dedicated to connecting
							buyers and sellers of qurbani animals. We provide a seamless and
							secure marketplace for individuals to find and book high-quality
							livestock for their qurbani needs.
						</p>
					</div>
					<div className="mt-6.25">
						<h4 className="font-bold text-xl text-white">Contact Us</h4>
						<div className="space-y-2 mt-8">
							<p className="text-[#ffffff] text-sm flex items-center gap-2">
								<ImLocation />{" "}
								<span>123, Main Road, Dhaka, DK, Bangladesh.</span>
							</p>
							<p className="text-[#ffffff] text-sm flex items-center gap-2">
								<FiPhone /> <span>+880 123456789</span>
							</p>
							<p className="text-[#ffffff] text-sm flex items-center gap-2">
								<FiMail /> <span>info@qurbanihat.com</span>
							</p>
						</div>
					</div>
					<div className="mt-6.25">
						<h4 className="font-bold text-xl text-white">Social Links</h4>
						<div className="flex gap-4 mt-8">
							<Link
								href="#"
								className="w-7.5 h-7.5 flex items-center justify-center bg-white text-[#0F5027] rounded-full hover:text-[#a6aea9] transition-colors duration-500"
							>
								<FaFacebookF />
							</Link>
							<Link
								href="#"
								className="w-7.5 h-7.5 flex items-center justify-center bg-white text-[#0F5027] rounded-full hover:text-[#a6aea9] transition-colors duration-500"
							>
								<FaXTwitter />
							</Link>
							<Link
								href="#"
								className="w-7.5 h-7.5 flex items-center justify-center bg-white text-[#0F5027] rounded-full hover:text-[#a6aea9] transition-colors duration-500"
							>
								<FaInstagram />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-11/12 mx-auto mt-10 text-center text-sm text-[#ffffff]">
					<hr className="border-[#868686]" />
					<div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
						<p>
							&copy; {new Date().getFullYear()} QurbaniHat. All rights reserved.
						</p>
						<ul className="flex items-center gap-5">
							<li>
								<Link
									href="/privacy-policy"
									className="text-[#ffffff] hover:text-[#a6aea9] transition-colors duration-500"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms-of-service"
									className="text-[#ffffff] hover:text-[#a6aea9] transition-colors duration-500"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/terms-of-service"
									className="text-[#ffffff] hover:text-[#a6aea9] transition-colors duration-500"
								>
									Refund Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
