// Routes.js
import { Routes, Route } from "react-router-dom";
import CounterApp from "../../apps/CounterApp";
import AppDetails from "../../apps";
import TodoApp from "../../apps/TodoApp";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppDetails />} />
      <Route path="/counterapp" element={<CounterApp />} />
      <Route path="/todoapp" element={<TodoApp />} />
    </Routes>
  );
}

export default AppRoutes;
