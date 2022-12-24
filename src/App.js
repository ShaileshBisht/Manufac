import "./App.css";
import { arr } from "../src/data/data";
import ReactECharts from "echarts-for-react";
import { useState } from "react";
import scatterOption from "./data/scatter";
import { xaxis, yaxis } from "./data/bar";

function App() {
  const [chartType, setChartType] = useState("bar");

  //bar chart

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

      <p className="app__subTitle">
        showing the “Alcohol” category on the horizontal axis and the{" "}
        <strong>average</strong> of “Malic Acid” for each class on the vertical
        axis.
      </p>

      <div className="app__graph">
        <ReactECharts option={options} />
      </div>

      <p className="app__subTitle">
        Scatter plot to be drawn between “Color Intensity” on the horizontal
        axis and “Hue” on the vertical axis.
      </p>

      {/* scatter graph */}
      <div className="app__graph">
        <ReactECharts option={scatterOption} />
      </div>
    </div>
  );
}

export default App;
