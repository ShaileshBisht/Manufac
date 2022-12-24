import { arr } from "../data/data";

const scatterData = arr.map((item) => {
  return [item["Color intensity"], item.Hue];
});

const option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: scatterData,
      type: "scatter",
    },
  ],
};

export default option;
