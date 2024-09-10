import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  //   Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StudentChat: React.FC = () => {
  const data = [
    { name: "Total", value: 10, color: "#92D7F7" },
    { name: "Completed", value: 6, color: "#29CC97" },
    { name: "Incomplete", value: 4, color: "#98654F" },
    { name: "Void", value: 0, color: "#FF2E2E" },
  ];
  return (
    <div
      style={{ width: "100%", height: "84.5%" }}
      className="font-Poppins text-[13px] font-medium "
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          stackOffset="sign"
          barCategoryGap="25%"
          margin={{
            // top: 5,
            // right: 30,
            left: -40,
            // bottom: 5,
          }}
        >
          <CartesianGrid stroke="white" strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={entry.color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentChat;
