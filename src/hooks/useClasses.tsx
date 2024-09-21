import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getClass } from "../services/api/calls/getApis";

// import React from 'react'
interface classesInterface {
  id: number;
  name: string;
  abbreviation: string;
  base_class: number;
}
interface useClassesI {
    classNameData: classesInterface[];
    classError: Error | null;
    isClassError: boolean;
    isClassLoading: boolean;
}
const useClasses = () : useClassesI => {
//   const [classNameData, setClassNameData] = useState<classesInterface[]>([]);
  // GETTING CLASS Data
  const {
    data: classData,
    isError: isClassError,
    error: classError,
    isLoading: isClassLoading,
  } = useQuery({
    queryKey: ["class"],
    queryFn: () => getClass(),
  });
//   const classes: classesInterface[] = useMemo(() => {
//     return (classData && classData.data.data) || [];
//   }, [classData]);
  const classNameData: classesInterface[] = useMemo(() => {
    if (!classData || !classData.data || !Array.isArray(classData.data.data)) {
      return [];
    }
    return classData.data.data;
  }, [classData]);
//   useEffect(() => {
//     classes.length > 0 && setClassNameData(classes);
//   }, [classes]);

  return { classNameData, classError, isClassError, isClassLoading };
};

export default useClasses;
