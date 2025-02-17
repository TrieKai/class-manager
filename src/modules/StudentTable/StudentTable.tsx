import { FC } from "react";
import { useGetStudentsQuery } from "../../services/api";
import { ActionsContainer, TableContainer } from "./styles";
import { TabItem, Tabs } from "@/components/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setViewMode } from "@/store/studentSlice";
import StudentTableGroupView from "./StudentTableGroupView";
import StudentTableListView from "./StudentTableListView";
import { MoreButton } from "@/components/MoreButton";

export const StudentTable: FC = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state: RootState) => state.student.viewMode);
  const { data: students } = useGetStudentsQuery();

  const tabItems: TabItem[] = [
    { key: "list", label: "Student List" },
    { key: "group", label: "Group" },
  ];

  const menuItems = [
    {
      label: "Edit Class",
      onClick: () => {
        console.log("Edit class clicked");
      },
    },
    {
      label: "Delete Class",
      onClick: () => {
        console.log("Delete class clicked");
      },
    },
  ];

  if (!students) {
    return null; // TODO: no data
  }

  return (
    <TableContainer>
      <ActionsContainer>
        <Tabs
          items={tabItems}
          activeKey={viewMode}
          onChange={(key) => dispatch(setViewMode(key as "list" | "group"))}
        />
        <MoreButton items={menuItems} />
      </ActionsContainer>

      {viewMode === "list" && <StudentTableListView students={students} />}
      {viewMode === "group" && <StudentTableGroupView students={students} />}
    </TableContainer>
  );
};
