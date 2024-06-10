import { ButtonHTMLAttributes } from "react";

export interface LeaveListProps {
  title: string;
  leaves: any[];
  updateLeave: (id: number, type: string) => void;
  action: ((props: ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element)[];
}
