import { Component, MouseEvent, ReactNode } from "react";
import styles from "./Leave.module.scss";
import { LeaveProps } from "./Leave.types";

class NewLeave extends Component<LeaveProps> {
  constructor(props: LeaveProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className={styles.Leave}>
        <div className={styles.LeaveInfo}>
          <span>{this.props.date}</span>
          <span>{this.props.description}</span>
        </div>
        <div className={styles.Btn}>
          {this.props.action.map((Btns) => (
            <Btns
              onClick={(e: MouseEvent) =>
                this.props.updateLeave(
                  this.props.id,
                  (e.target as HTMLElement).innerText
                )
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewLeave;
