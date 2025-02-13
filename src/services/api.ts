import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Student, ClassInfo } from "../types/student";

const initialMockStudents: Student[] = [
  {
    id: crypto.randomUUID(),
    name: "Philip",
    position: "01",
    count: 2,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Darrell",
    position: "02",
    count: 5,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "03",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Cody",
    position: "04",
    count: 9,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "05",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "06",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Bessie",
    position: "07",
    count: 3,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Wendy",
    position: "08",
    count: 0,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "09",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Esther",
    position: "10",
    count: 1,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "11",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Gloria",
    position: "12",
    count: 1,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "13",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Lee",
    position: "14",
    count: 2,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "15",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Ann",
    position: "16",
    count: 0,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Jacob",
    position: "17",
    count: 8,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Calvin",
    position: "18",
    count: 2,
    isGuest: false,
    disabled: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Guest",
    position: "19",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Joe",
    position: "20",
    count: 0,
    isGuest: false,
    disabled: false,
  },
];

// use let instead of const, so that it can be updated
let mockStudents = [...initialMockStudents];
let mockClassInfo: ClassInfo = {
  name: "302 Science",
  id: "X58E9647",
  currentCount: 16,
  maxCount: 30,
};

// In a real environment, this would be the actual API URL
const BASE_URL = "https://api.example.com";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Students"],
  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      queryFn: async () => {
        // mock API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { data: [...mockStudents] };
      },
      providesTags: ["Students"],
    }),
    getClassInfo: builder.query<ClassInfo, void>({
      queryFn: async () => {
        // mock API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { data: { ...mockClassInfo } };
      },
      providesTags: ["Students"],
    }),
    updateStudentCount: builder.mutation<
      Student,
      { id: string; increment: boolean }
    >({
      queryFn: async ({ id, increment }) => {
        // mock API delay
        await new Promise((resolve) => setTimeout(resolve, 100));

        const studentIndex = mockStudents.findIndex((s) => s.id === id);
        if (studentIndex === -1) {
          return { error: { status: 404, data: "Student not found" } };
        }

        const student = mockStudents[studentIndex];
        if (student.disabled) {
          return { error: { status: 400, data: "Student is disabled" } };
        }

        if (!increment && student.count === 0) {
          return { error: { status: 400, data: "Count cannot be negative" } };
        }

        // create a new student object
        const updatedStudent = {
          ...student,
          count: increment ? student.count + 1 : student.count - 1,
        };

        // update the mock database
        mockStudents = [
          ...mockStudents.slice(0, studentIndex),
          updatedStudent,
          ...mockStudents.slice(studentIndex + 1),
        ];

        // update class info
        mockClassInfo = {
          ...mockClassInfo,
          currentCount: mockClassInfo.currentCount + (increment ? 1 : -1),
        };

        return { data: updatedStudent };
      },
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetClassInfoQuery,
  useUpdateStudentCountMutation,
} = api;
