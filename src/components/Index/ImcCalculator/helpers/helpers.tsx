import React from "react";

export function getPercentile(z_perc) {
  switch (z_perc) {
    case 0:
      return (
        <>
          less than the 1<sup>st</sup>{" "}
        </>
      );
    case 100:
      return (
        <>
          greater than the 99<sup>th</sup>{" "}
        </>
      );
    default:
      return (
        <>
          the {z_perc} {getOrdinalIndicator(z_perc)}
        </>
      );
  }
}

function getOrdinalIndicator(z_percentile) {
  switch (z_percentile) {
    case 0:
      return "";
    case 100:
      return "";
    case 1:
      return <sup>st</sup>;
    case 2:
      return <sup>nd</sup>;
    case 3:
      return <sup>rd</sup>;
    default:
      return <sup>th</sup>;
  }
}

export function getBMIConclusion(z_percentile) {
  if (z_percentile < 5) {
    return "is underweight";
  } else if (5 <= z_percentile && z_percentile < 85) {
    return "has healthy weight";
  } else if (85 <= z_percentile && z_percentile < 95) {
    return "is overweight";
  } else if (z_percentile >= 95) {
    return "has obesity";
  }
}

export function getBMI_text(z_percentile, gender) {
  if (z_percentile < 5) {
    return " and should be seen by a healthcare provider for further assessment to determine possible causes of underweight";
  } else if (5 <= z_percentile && z_percentile < 85) {
    return "";
  } else if (85 <= z_percentile && z_percentile < 95) {
    return "";
  } else if (z_percentile >= 95) {
    return ` and may have weight-related health problems. ${
      gender === "f" ? "She" : "He"
    } should be seen by a healthcare provider for further assessment`;
  }
}
