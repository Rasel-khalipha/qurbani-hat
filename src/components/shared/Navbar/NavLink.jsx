"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, children }) => {
	const pathname = usePathname();

	const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

	return (
		<>
			<Link href={href} className="relative group font-medium">
				<span
					className={`transition ${
						isActive
							? "text-[#0F5027]"
							: "text-[#706F6F] hover:text-[#0F5027] transition-colors duration-500"
					}`}
				>
					{children}
				</span>

				<span
					className={`absolute left-0 -bottom-1 h-[2px] bg-[#0F5027] transition-all duration-300
				${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
				>
					{" "}
				</span>
			</Link>
		</>
	);
};

export default NavLink;
