import "./App.css";
import { arr } from "../src/data/data";

function App() {
  // console.log(data);

  const averages = [
    ...arr.reduce(
      (map, { Alcohol, "Malic Acid": malicAcid }) =>
        map.set(Alcohol, [...(map.get(Alcohol) || []), malicAcid]),
      new Map()
    ),
  ].map(([Alcohol, malicAcid]) => ({
    Alcohol,
    malicAcid: malicAcid.reduce((sum, val) => sum + val, 0) / malicAcid.length,
  }));

  console.log(averages);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
