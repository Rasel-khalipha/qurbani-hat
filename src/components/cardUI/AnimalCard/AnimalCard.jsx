import Image from "next/image";

const AnimalCard = ({ animal }) => {
	return (
		<>
			<div>
				<div className="card bg-base-100 w-96 shadow-sm">
					<figure>
						<Image
							src={animal.image}
							alt={animal.name}
							width={300}
							height={200}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">{animal.name}</h2>
						<p>
							A card component has a figure, a body part, and inside body there
							are title and actions parts
						</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnimalCard;
