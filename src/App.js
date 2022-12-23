import "./App.css";
import { arr } from "../src/data/data";
import ReactECharts from "echarts-for-react";
import { useState } from "react";

function App() {
  const [chartType, setChartType] = useState("bar");

  //creating new array of oobject
  // const averages = [
  //   ...arr.reduce(
  //     (map, { Alcohol, "Malic Acid": malicAcid }) =>
  //       map.set(Alcohol, [...(map.get(Alcohol) || []), malicAcid]),
  //     new Map()
  //   ),
  // ].map(([Alcohol, malicAcid]) => ({
  //   Alcohol,
  //   malicAcid: malicAcid.reduce((sum, val) => sum + val, 0) / malicAcid.length,
  // }));

  // console.log(averages);

  // get x-axis and y-axis data

  // let result = {};
  // averages.forEach((average) => {
  //   const { Alcohol, malicAcid } = average;
  //   result[`Alochol${Alcohol}`] = malicAcid;
  // });
  // console.log(Object.keys(result));
  // console.log(Object.values(result));

  //

  // alternative code

  let malicAcidSum = {};
  let lengthMalicAcid = {};
  let resultNew = {};
  arr.forEach((wine) => {
    const { Alcohol } = wine;
    const Malic = wine["Malic Acid"];
    let key = `Alcohol-${Alcohol}`;
    if (key in malicAcidSum) {
      let value = malicAcidSum[key];
      malicAcidSum[key] = value + Malic;
      lengthMalicAcid[key] += 1;
    } else {
      malicAcidSum[key] = Malic;
      lengthMalicAcid[key] = 1;
    }
  });

  Object.keys(malicAcidSum).forEach((key) => {
    resultNew[key] = malicAcidSum[key] / lengthMalicAcid[key];
  });

  let xaxis = Object.keys(resultNew);
  let yaxis = Object.values(resultNew);

  console.log(chartType);

  //

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: xaxis,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yaxis,
        type: chartType,
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="App">
      <h1 className="app__title">Data Visualization Task</h1>

      <div className="app__chart-type">
        <p>select the chart type</p>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="line">line</option>
          <option value="bar">bar</option>
        </select>
      </div>

      <p className="app__title">
        showing the “Alcohol” category on the horizontal axis and the average of
        “Malic Acid” for each class on the vertical axis.
      </p>

      <div className="app__graph">
        <ReactECharts option={options} />
      </div>
    </div>
  );
}

export default App;
