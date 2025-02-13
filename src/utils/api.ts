import { Student, ClassInfo } from "../types/student";

const mockStudents: Student[] = [
  {
    id: 1,
    name: "Philip",
    position: "01",
    count: 1,
    isGuest: false,
    disabled: false,
  },
  {
    id: 2,
    name: "Darrell",
    position: "02",
    count: 5,
    isGuest: false,
    disabled: false,
  },
  {
    id: 3,
    name: "Guest",
    position: "03",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 4,
    name: "Cody",
    position: "04",
    count: 9,
    isGuest: false,
    disabled: false,
  },
  {
    id: 5,
    name: "Guest",
    position: "05",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 6,
    name: "Guest",
    position: "06",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 7,
    name: "Bessie",
    position: "07",
    count: 3,
    isGuest: false,
    disabled: false,
  },
  {
    id: 8,
    name: "Wendy",
    position: "08",
    count: 0,
    isGuest: false,
    disabled: false,
  },
  {
    id: 9,
    name: "Guest",
    position: "09",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 10,
    name: "Esther",
    position: "10",
    count: 1,
    isGuest: false,
    disabled: false,
  },
  {
    id: 11,
    name: "Guest",
    position: "11",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 12,
    name: "Gloria",
    position: "12",
    count: 1,
    isGuest: false,
    disabled: false,
  },
  {
    id: 13,
    name: "Guest",
    position: "13",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 14,
    name: "Lee",
    position: "14",
    count: 2,
    isGuest: false,
    disabled: false,
  },
  {
    id: 15,
    name: "Guest",
    position: "15",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 16,
    name: "Ann",
    position: "16",
    count: 0,
    isGuest: false,
    disabled: false,
  },
  {
    id: 17,
    name: "Jacob",
    position: "17",
    count: 8,
    isGuest: false,
    disabled: false,
  },
  {
    id: 18,
    name: "Calvin",
    position: "18",
    count: 2,
    isGuest: false,
    disabled: false,
  },
  {
    id: 19,
    name: "Guest",
    position: "19",
    count: 0,
    isGuest: true,
    disabled: true,
  },
  {
    id: 20,
    name: "Joe",
    position: "20",
    count: 0,
    isGuest: false,
    disabled: false,
  },
];

const mockClassInfo: ClassInfo = {
  name: "302 Science",
  id: "X58E9647",
  currentCount: 16,
  maxCount: 30,
};

export const fetchStudents = async (): Promise<Student[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStudents);
    }, 500);
  });
};

export const fetchClassInfo = async (): Promise<ClassInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockClassInfo);
    }, 500);
  });
};
