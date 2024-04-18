import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listAllTasks,addTask } from "../redux/taskActions";
import NewTaskForm from "./NewTaskForm";
import useScreenSize from "../hooks/useScreenSize";

import TasksList from "./TasksList";

const App = () => {
  const isSmallScreen = useScreenSize()
  const tasks = useSelector(state => state?.tasks);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllTasks());
  }, [dispatch]);

  const handleSubmit = ({ title }) => {
    dispatch(addTask({ id: Date.now(), title, status:false }));
    dispatch(listAllTasks());
  };

  return (
    <div style={{ margin: "0 auto", padding: isSmallScreen? "14px 12px":"20px", maxWidth: "600px" }}>
      <NewTaskForm onSubmit={handleSubmit} />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default App;
