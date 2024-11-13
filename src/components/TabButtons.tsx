import { Dispatch, SetStateAction } from "react";
import { Pet } from "../App";

export default function TabButtons({
  petData,
  setActiveTab,
}: {
  petData: Pet[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="tab__header">
      {petData.map((item, index) => (
        <li
          className={`tab__button`}
          key={item.animal}
          onClick={() => setActiveTab(index)}
        >
          {item.animal}
        </li>
      ))}
    </div>
  );
}
