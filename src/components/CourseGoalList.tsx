import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goals. Let's create some</InfoBox>;
  }

  let warningBox: ReactNode;
  warningBox = goals.length >= 4 ? <InfoBox mode="warning" severity="medium">You submit probably too much goals.</InfoBox> : null;
  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
    </>
  );
};

export default CourseGoalList;
