import { useState } from "react";
import "./App.css";
import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import Headers from "./components/Headers";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal = {
      id: Math.random(),
      title: "Learn React + TS",
      description: "Learn it from ground up",
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter(goal => goal.id != id));
  }

  return (
    <main>
      <Headers image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Headers>
      <NewGoal />
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      {/* <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul> */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>
    </main>
  );
}

export default App;
