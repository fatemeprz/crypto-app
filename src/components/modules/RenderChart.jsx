import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import formatedData from "../../helper/FormatedData";

export default function RenderChart({ type, chart }) {
  console.log(formatedData(chart, type));

  return (
    <>
      <ResponsiveContainer width="100%" height="60%">
        <LineChart width={400} height={400} data={formatedData(chart, type)}>
          <Line
            type="monotone"
            dataKey={type}
            stroke="#3874ff"
            strokeWidth="2px"
          />
          <CartesianGrid stroke="#404042" />
          <XAxis dataKey="date" fontSize={"8px"}/>
          <Legend />
          <YAxis dataKey={type} domain={["auto", "auto"]} fontSize={"8px"} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
