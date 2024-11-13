import { Pet } from "../App";

export default function TabContent({
  petData,
  activeTab,
}: {
  petData: Pet[];
  activeTab: number;
}) {
  return (
    <div className="tab__container ">
      <div className="tab__content">
        <img src={petData[activeTab].image} alt="" />
        <p> {petData[activeTab].fact}</p>
      </div>
    </div>
  );
}
