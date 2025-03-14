import { useEffect, useState } from "react";
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
  const [goals, setGoals] = useState<CourseGoal[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  function handleAddGoal(goal: string, summary: string) {
    const newGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(goals));
  });

  return (
    <main>
      <Headers image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Headers>
      <NewGoal onAddGoal={handleAddGoal} />
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
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      ></CourseGoalList>
    </main>
  );
}

export default App;
