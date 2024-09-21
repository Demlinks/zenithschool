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
// import { totalPercentageValueI } from "../../types/user.type";
interface PaymentValue {
  total_students: number;
  paid: number;
  paid_half: number;
  paid_nothing: number;
}

// Define the props for the StudentChat component
interface StudentChatProps {
  value: PaymentValue;
}
const StudentChat: React.FC<StudentChatProps> = ({value}) => {
  const data = [
    { name: "Total", value: value.total_students, color: "#92D7F7" },
    { name: "Completed", value: value.paid, color: "#29CC97" },
    { name: "Incomplete", value: value.paid_half, color: "#98654F" },
    { name: "Void", value: value.paid_nothing, color: "#FF2E2E" },
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
