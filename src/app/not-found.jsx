import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
	return (
		<main className="min-h-screen bg-linear-to-br from-emerald-950 via-green-900 to-black relative overflow-hidden flex items-center justify-center px-6">
			<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_25%),radial-gradient(circle_at_80%_30%,white,transparent_20%),radial-gradient(circle_at_50%_80%,white,transparent_20%)]" />
			<div className="max-w-3xl text-center relative z-10 backdrop-blur-sm bg-white/10 border border-white/10 rounded-3xl p-10 shadow-2xl">
				<div className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold mb-6 shadow-sm">
					Lost Route
				</div>

				<h1 className="text-7xl md:text-9xl font-black text-white tracking-tight mb-4">
					404
				</h1>

				<h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
					This Page Escaped the Farm
				</h2>

				<p className="text-white text-base md:text-lg max-w-xl mx-auto mb-8">
					Looks like this page wandered off the ranch. It may have been moved,
					deleted, or the URL is incorrect.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-lg"
					>
						<Home className="inline w-4 h-4 mr-2" /> Back to Home
					</Link>

					<Link
						href="/animals"
						className="px-6 py-3 rounded-2xl border border-gray-300 text-white font-semibold hover:bg-gray-100 hover:text-gray-700 transition"
					>
						<Search className="inline w-4 h-4 mr-2" /> Browse Animals
					</Link>
				</div>

				<div className="mt-12 flex justify-center gap-4 text-7xl animate-bounce">
					🐄 🐐
				</div>

				<p className="mt-6 text-sm text-white/70 flex items-center justify-center gap-2">
					Need help finding something? <ArrowRight className="w-4 h-4" /> Try
					searching from the homepage.
				</p>
			</div>
		</main>
	);
}
