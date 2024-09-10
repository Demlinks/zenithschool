import React, { useEffect } from "react";
import { getClass } from "../../services/api/calls/getClass";
import { useQuery } from "@tanstack/react-query";
import { getClassStat } from "../../services/api/calls/getClassStat";

const Chat: React.FC = () => {
  // GETTING CLASS Data
  const {
    data: classData,
    isError: isClassError,
    error: classError,
    isLoading: isClassLoading
  } = useQuery({
    queryKey: ["class", 7],
    queryFn: () => getClass(7),
  });

  // GETTING CLASS STATS Data
  const {
    data: classStatData,
    isError: isClassStatError,
    error: classStatError,
    isLoading: isClassStatLoading
  } = useQuery({
    queryKey: ["classStat"],
    queryFn: () => getClassStat(),
  });

  useEffect(() => {
    const classes = classData && classData.data.data || [];
    console.log("Class Data:", classes, isClassError, classError, isClassLoading);
  }, [classData, classError, isClassError, isClassLoading]);

  useEffect(() => {
    const classStats = classStatData && classStatData.data.data || [];
    console.log("Class Stats:", classStats, isClassStatError, classStatError, isClassStatLoading);
  }, [classStatData, classStatError, isClassStatError, isClassStatLoading]);
  return <div className="text-center">Chat</div>;
};

export default Chat;
