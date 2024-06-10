import { ButtonHTMLAttributes } from "react";

export interface leave {
  id: number;
  date: string;
  description: string;
  type: string;
}
export interface LeaveProps extends leave {
  updateLeave: (id: number, type: string) => void;
  action: ((props: ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element)[];
}
