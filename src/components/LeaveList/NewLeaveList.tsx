import { Component, ReactNode } from "react";
import NewLeave from "../Leave/NewLeave ";
import styles from "./LeaveList.module.scss";
import { LeaveListProps } from "./LeaveList.types";

class NewLeaveList extends Component<LeaveListProps> {
  constructor(props: LeaveListProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className={styles.LeaveList}>
        <h2 className={styles.title}>{this.props.title}</h2>

        {this.props.leaves.map((leave, index) => {
          return (
            <>
              <NewLeave
                key={index}
                {...leave}
                updateLeave={this.props.updateLeave}
                action={this.props.action}
              />
            </>
          );
        })}
      </div>
    );
  }
}
export default NewLeaveList;
