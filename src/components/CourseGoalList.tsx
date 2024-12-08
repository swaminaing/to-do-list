import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App"

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({goals, onDeleteGoal}: CourseGoalListProps) => {
  return (
    <ul>
        {
            goals.map(goal => {
                return(
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default CourseGoalList