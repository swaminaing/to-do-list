import { type ReactNode } from "react"; // typePropsWithChildren,

interface CourseGoalProps{
  id: number
  title: string;
  children: ReactNode
  onDelete: (id: number) => void;
}

// type Props = PropsWithChildren<{title: string}>; //Alternatively

const CourseGoal = ({id, title, children, onDelete}: CourseGoalProps) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal