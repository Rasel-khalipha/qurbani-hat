import Image from "next/image";

const AnimalCard = ({ animal }) => {
	return (
		<>
			<div>
				<div className="card shadow-sm">
					<figure>
						<Image
							src={animal.image}
							alt={animal.name}
							width={300}
							height={250}
							style={{ objectFit: "cover", width: "100%", height: "250px" }}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">{animal.name}</h2>
						<div className="flex justify-between items-center">
							<p className="font-medium text-sm text-[#555]">
								Age: <span>{animal.age}</span> years
							</p>
							<p className="font-medium text-sm text-[#555] flex justify-end">
								Weight: <span>{animal.weight}</span> kg
							</p>
						</div>
						<p className="truncate">{animal.description}</p>
						<div className="card-actions justify-start">
							<p className="font-semibold text-lg text-[#0F5027] flex items-center">
								Price: ${animal.price}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnimalCard;
