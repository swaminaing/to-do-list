import { type ReactNode } from "react"; // typePropsWithChildren,

interface Props{
  title: string;
  children: ReactNode
}

// type Props = PropsWithChildren<{title: string}>; //Alternatively

const CourseGoal = ({title, children}: Props) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>Delete</button>
    </article>
  )
}

export default CourseGoal