import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Task1 from "@/pages/TaskOne/TaskOne";
import Task2 from "@/pages/TaskTwo/TaskTwo";
import Task3 from "@/pages/TaskThree/TaskThree";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/task1">Task 1</Link>
        <Link to="/task2">Task 2</Link>
        <Link to="/task3">Task 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/task1" replace />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}
