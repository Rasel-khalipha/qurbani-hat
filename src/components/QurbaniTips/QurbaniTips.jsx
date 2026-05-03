import { FaHeartbeat, FaHandsWash } from "react-icons/fa";
import { FaCalendarCheck, FaLeaf } from "react-icons/fa6";

const TipsCard = () => {
	return (
		<>
			<div className="w-11/12 mx-auto rounded-lg mt-20 ">
				<h2 className="text-3xl font-bold text-center mb-6 text-[#0F5027] pt-10">
					Qurbani Tips
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100 rounded-lg">
					<div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
						<div className="w-10 h-10 bg-green-500/30 rounded-full flex justify-center items-center text-center mb-3">
							<FaHeartbeat className="text-xl text-[#0F5027]" />
						</div>
						<h3 className="text-lg font-semibold mb-2">Health Check</h3>
						<p className="text-sm text-gray-600">
							Ensure the animal is healthy and free from diseases before
							purchase.
						</p>
					</div>
					<div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
						<div className="w-10 h-10 bg-green-500/30 rounded-full flex justify-center items-center text-center mb-3">
							<FaHandsWash className="text-xl text-[#0F5027]" />
						</div>
						<h3 className="text-lg font-semibold mb-2">Hygiene</h3>
						<p className="text-sm text-gray-600">
							Maintain proper hygiene for the animal to prevent infections and
							ensure a clean environment.
						</p>
					</div>
					<div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
						<div className="w-10 h-10 bg-green-500/30 rounded-full flex justify-center items-center text-center mb-3">
							<FaCalendarCheck className="text-xl text-[#0F5027]" />
						</div>
						<h3 className="text-lg font-semibold mb-2">Timely Sacrifice</h3>
						<p className="text-sm text-gray-600">
							Plan the sacrifice on the appropriate day of Eid al-Adha for
							religious observance.
						</p>
					</div>
					<div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
						<div className="w-10 h-10 bg-green-500/30 rounded-full flex justify-center items-center text-center mb-3">
							<FaLeaf className="text-xl text-[#0F5027]" />
						</div>
						<h3 className="text-lg font-semibold mb-2">
							Sustainable Practices
						</h3>
						<p className="text-sm text-gray-600">
							Consider sustainable and ethical practices in animal rearing and
							sacrifice.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TipsCard;
