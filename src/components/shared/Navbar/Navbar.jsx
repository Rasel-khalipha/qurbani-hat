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
			<div className="flex flex-col md:justify-between items-center py-5 w-11/12 mx-auto">
				<div>
					<Link href="/" className="flex items-center gap-1">
						<Image src="/logo.png" alt="Logo" width={60} height={60} />
						<h3 className=" font-semibold text-xl text-[#000000] -ml-4">
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
			{/* <div className="w-11/12 mx-auto">
				<div className="navbar">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								{navItems.map((item) => (
									<li key={item.href} className="font-semibold text-lg">
										<NavLink href={item.href}>{item.name}</NavLink>
									</li>
								))}
							</ul>
						</div>
						<Link href="/" className="flex items-center gap-1">
							<Image src="/logo.png" alt="Logo" width={60} height={60} />
							<h3 className=" font-semibold text-xl text-[#000000]">
								<span className="text-[#0F5027] font-extrabold">Qurbani</span>
								Hat
							</h3>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal">
							{navItems.map((item) => (
								<li key={item.href} className="font-semibold text-lg">
									<NavLink href={item.href}>{item.name}</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="navbar-end gap-2">
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
			</div> */}
		</>
	);
};

export default Navbar;
