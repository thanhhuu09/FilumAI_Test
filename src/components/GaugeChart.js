"use client";
import { useQuiz } from "@/app/context/QuizContext";
import GaugeChart from "react-gauge-chart";

const GaugeChartComponent = ({ percent }) => {
  return (
    <div>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={30}
        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
        colors={["#FF5F5F", "#FFC371", "#FFFF00", "#00E676", "#00B0FF"]}
        percent={percent / 100}
        arcPadding={0.0}
        cornerRadius={0}
        needleColor="#FFDD00"
        needleBaseColor="#888888"
        textColor="#FFFFFF"
      />
    </div>
  );
};

export default GaugeChartComponent;
