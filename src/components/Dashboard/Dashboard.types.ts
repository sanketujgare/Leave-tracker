import { leave } from "../Leave/Leave.types";
export interface DashboardProps {
  leaves: leave[];
  setLeaves: (arg1: leave[]) => void;
}
