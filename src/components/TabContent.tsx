import { Pet } from "../App";

export default function TabContent({ petData }: { petData: Pet[] }) {
  return (
    <div className="tab__container ">
      <div className="tab__content">
        {petData.map((pet, index) => (
          <div key={index}>
            <img src={pet.image} alt="" />
            <p>{pet.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
