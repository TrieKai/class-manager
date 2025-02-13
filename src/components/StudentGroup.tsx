import { FC } from "react";
import GroupView from "./GroupView";
import { useGetStudentsQuery } from "@/services/api";

const StudentGroup: FC = () => {
  const { data: students } = useGetStudentsQuery();

  if (!students) {
    return null;
  }

  return <GroupView students={students} />;
};

export default StudentGroup;
