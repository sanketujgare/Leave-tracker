import LeaveList from "../LeaveList/LeaveList";
import styles from "./Dashboard.module.scss";
import { leavesdata } from "../../data";
import { ButtonHTMLAttributes } from "react";

import { useState } from "react";
import { DashboardProps } from "./Dashboard.types";

const Dashboard = ({ leaves, setLeaves }: DashboardProps) => {
  // const [data, updateData] = useState(leavesdata);
  console.log(leaves);
  const updateLeave = (id: number, type: string) => {
    console.log(id, type);
    const updatedLeavesData = leaves.map((leave) => {
      if (leave.id === id) {
        return { ...leave, type: type };
      } else {
        return leave;
      }
    });
    // console.log(updatedLeavesData);
    // updateData(updatedLeavesData);
    setLeaves(updatedLeavesData);
  };

  const createButton = (text: "M" | "P" | "S") => {
    return (props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
      return (
        <>
          <button {...props}>{text}</button>
        </>
      );
    };
  };
  const Mandatorybtn = createButton("M");
  const Plannedbtn = createButton("P");
  const Sickedbtn = createButton("S");

  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardHeading}>
        <h1>Leaves Tracker</h1>
      </div>
      <div className={styles.LeavelistContainer}>
        <LeaveList
          title="Planned"
          leaves={leaves.filter((ele) => ele.type === "P")}
          updateLeave={updateLeave}
          action={[Mandatorybtn, Sickedbtn]}
        />
        <LeaveList
          title="Mandatory"
          leaves={leaves.filter((ele) => ele.type === "M")}
          updateLeave={updateLeave}
          action={[Plannedbtn, Sickedbtn]}
        />
        <LeaveList
          title="Sick"
          leaves={leaves.filter((ele) => ele.type === "S")}
          updateLeave={updateLeave}
          action={[Plannedbtn, Mandatorybtn]}
        />
      </div>
    </div>
  );
};
export default Dashboard;
