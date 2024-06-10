import NewLeaveList from "../LeaveList/NewLeaveList";
import styles from "./Dashboard.module.scss";
import { leavesdata } from "../../data";
import { ButtonHTMLAttributes, Component, ReactNode } from "react";

import { useState } from "react";
import { DashboardProps } from "./Dashboard.types";

class NewDashboard extends Component<DashboardProps> {
  constructor(props: DashboardProps) {
    super(props);
  }

  updateLeave = (id: number, type: string) => {
    console.log(id, type);
    const updatedLeavesData = this.props.leaves.map((leave) => {
      if (leave.id === id) {
        return { ...leave, type: type };
      } else {
        return leave;
      }
    });

    this.props.setLeaves(updatedLeavesData);
  };

  createButton = (text: "M" | "P" | "S") => {
    return (props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
      return (
        <>
          <button {...props}>{text}</button>
        </>
      );
    };
  };
  Mandatorybtn = this.createButton("M");
  Plannedbtn = this.createButton("P");
  Sickedbtn = this.createButton("S");

  render(): ReactNode {
    return (
      <div className={styles.Dashboard}>
        <div className={styles.DashboardHeading}>
          <h1>Leaves Tracker</h1>
        </div>
        <div className={styles.LeavelistContainer}>
          <NewLeaveList
            title="Planned"
            leaves={this.props.leaves.filter((ele) => ele.type === "P")}
            updateLeave={this.updateLeave}
            action={[this.Mandatorybtn, this.Sickedbtn]}
          />
          <NewLeaveList
            title="Mandatory"
            leaves={this.props.leaves.filter((ele) => ele.type === "M")}
            updateLeave={this.updateLeave}
            action={[this.Plannedbtn, this.Sickedbtn]}
          />
          <NewLeaveList
            title="Sick"
            leaves={this.props.leaves.filter((ele) => ele.type === "S")}
            updateLeave={this.updateLeave}
            action={[this.Plannedbtn, this.Mandatorybtn]}
          />
        </div>
      </div>
    );
  }
}

export default NewDashboard;
