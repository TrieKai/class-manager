export interface Student {
  id: number;
  name: string;
  position: string;
  count: number;
  isGuest: boolean;
  disabled: boolean;
}

export interface ClassInfo {
  name: string;
  id: string;
  currentCount: number;
  maxCount: number;
}

export type ViewMode = "list" | "group";
