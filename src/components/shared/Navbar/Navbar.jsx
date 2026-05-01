import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "All-Animals", href: "/all-animals" },
	];
	return (
		<>
			<div className="flex flex-col md:flex-row md:justify-between items-center py-2 w-11/12 mx-auto">
				<div>
					<Link href="/" className="flex items-center gap-2.5">
						<Image
							src="/logo.png"
							alt="Logo"
							width={65}
							height={65}
							objectFit="contain"
						/>
						<h3 className=" font-semibold text-2xl text-[#000000]">
							<span className="text-[#0F5027] font-extrabold">Qurbani</span>
							Hat
						</h3>
					</Link>
				</div>
				<ul className="flex flex-col md:flex-row gap-3.5 items-center md:gap-6">
					{navItems.map((item) => (
						<li key={item.href} className="font-semibold text-lg">
							<NavLink href={item.href}>{item.name}</NavLink>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-4 mt-5 md:mt-0">
					<Link
						href="/login"
						className="btn bg-[#0F5027] text-white font-semibold text-lg hover:bg-[#197c3f] transition-colors duration-500"
					>
						Login
					</Link>
					<Link
						href="/register"
						className="btn bg-[#0F5027] text-white font-semibold text-lg hover:bg-[#197c3f] transition-colors duration-500"
					>
						Register
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
