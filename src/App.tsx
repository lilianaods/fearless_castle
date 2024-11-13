import { useState } from "react";
import "./App.css";
import TabButtons from "./components/TabButtons";
import TabContent from "./components/TabContent";
export type Pet = {
  animal: string;
  fact: string;
  image: string;
};

const petData: Pet[] = [
  {
    animal: "Cheetah",
    fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
    image: "../src/assets/6.svg",
  },
  {
    animal: "Koala",
    fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
    image: "../src/assets/3.svg",
  },
  {
    animal: "Elephant",
    fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
    image: "../src/assets/1.svg",
  },
  {
    animal: "Zebra",
    fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
    image: "../src/assets/7.svg",
  },
  {
    animal: "Horse",
    fact: "Horses have excellent memory and are capable of recognizing human emotions.",
    image: "../src/assets/5.svg",
  },
];
function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="main__container">
      <h1>Choose your pet</h1>
      <TabButtons
        petData={petData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent petData={petData} activeTab={activeTab} />
    </div>
  );
}

export default App;
