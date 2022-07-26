import "./App.scss";
import CourseOverview from "./containers/CourseOverview/CourseOverview";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <CourseOverview name="Nology Web Development" category="How to Get Good" completionTime="Infinity" price="50" syllabus="Game of Life" author="ToastyBoy133"/>
    </>
  );
}

export default App;
