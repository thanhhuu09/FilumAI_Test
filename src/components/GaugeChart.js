import React from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const GaugeChart = ({ value, maxValue }) => {
  const data = [
    { name: "Value", value: value },
    { name: "Rest", value: maxValue - value },
  ];

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  const renderCustomizedLabels = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
    payload,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {payload[index].name}
      </text>
    );
  };

  return (
    <PieChart width={200} height={100}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        activeIndex={0}
        activeShape={renderActiveShape}
      >
        <Cell key={`cell-0`} fill="#FFBB10" stroke="#FFBB10" />
        <Cell key={`cell-1`} fill="#6180A1" stroke="#6180A1" />
      </Pie>
    </PieChart>
  );
};

export default GaugeChart;
