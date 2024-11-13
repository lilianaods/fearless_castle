import { Pet } from "../App";

export default function TabButtons({ petData }: { petData: Pet[] }) {
  return (
    <div className="tab__header">
      {petData.map((item) => (
        <li className={`tab__button`} key={item.animal}>
          {item.animal}
        </li>
      ))}
    </div>
  );
}
