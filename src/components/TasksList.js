import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import TasksListItem from "./TasksListItem";
import useScreenSize from "../hooks/useScreenSize";

const TasksList = ({ tasks }) => {
  const isSmallScreen = useScreenSize()
  return (
    <ListGroup>
      {tasks
        ?.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.firstName) {
            return -1;
          }
          return 0;
        })
        .map(task => {
          return (
            <ListGroupItem key={task.id} style={isSmallScreen ?{padding:  "12px"}: {}}>
              <TasksListItem task={task} />
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};

export default TasksList;
