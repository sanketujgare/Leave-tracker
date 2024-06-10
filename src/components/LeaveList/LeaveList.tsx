import Leave from "../Leave/Leave";
import styles from "./LeaveList.module.scss";
import { LeaveListProps } from "./LeaveList.types";
const LeaveList = ({ title, leaves, updateLeave, action }: LeaveListProps) => {
  return (
    <div className={styles.LeaveList}>
      <h2 className={styles.title}>{title}</h2>

      {leaves.map((leave) => {
        return (
          <>
            <Leave {...leave} updateLeave={updateLeave} action={action} />
          </>
        );
      })}
    </div>
  );
};

export default LeaveList;
