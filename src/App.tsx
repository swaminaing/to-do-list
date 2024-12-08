import "./App.css";
import goalsImg from './assets/goals.jpg'
import CourseGoal from "./components/CourseGoal";
import Headers from "./components/Headers";

function App() {
  return (
    <main>
      <Headers image={{src: goalsImg, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Headers>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
