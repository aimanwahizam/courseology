import "./App.scss";
// import CourseOverview from "./containers/CourseOverview/CourseOverview";
import HomePage from "./containers/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      {/* <CourseOverview
        name="Nology Web Development"
        category="How to Get Good"
        completionTime="Infinity"
        price="50"
        syllabus="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        author="ToastyBoy133"
      /> */}
    </>
  );
}

export default App;
