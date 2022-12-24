import { arr } from "../data/data";

// creating new array of object which contain alcohol name and average of malic acid

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

export { xaxis, yaxis };
