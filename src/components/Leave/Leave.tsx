import { MouseEvent } from "react";
import styles from "./Leave.module.scss";
import { LeaveProps } from "./Leave.types";
const Leave = ({
  id,
  date,
  description,
  type,
  updateLeave,
  action,
}: LeaveProps) => {
  return (
    <div className={styles.Leave}>
      <div className={styles.LeaveInfo}>
        <span>{date}</span>
        <span>{description}</span>
      </div>
      <div className={styles.Btn}>
        {action.map((Btns) => (
          <Btns
            onClick={(e: MouseEvent) =>
              updateLeave(id, (e.target as HTMLElement).innerText)
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Leave;
