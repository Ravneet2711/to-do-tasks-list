import React,{useState} from "react";
import { Button } from "reactstrap";
import { deleteTaskById,updateTask } from "../redux/taskActions";
import { useDispatch } from "react-redux";
import { FormGroup, Tooltip, Input } from 'reactstrap';

const TasksListItem = ({ task }) => {
  const dispatch = useDispatch();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const stringToHSLColor = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          margin: "auto 0",
          textAlign: "center",
          height: "40px",
          width: "40px",
          lineHeight: "40px",
          borderRadius: "50%",
          color: "white",
          fontWeight: "bold",
          background: stringToHSLColor(task.title + task?.title?.slice(-1)),
        }}
      >
        {!!task && !!task.title
          ? task?.title[0].toUpperCase() + task?.title?.slice(-1).toUpperCase()
          : ""}
      </div>
      <div style={{ margin: "auto 0", flexGrow: 1, paddingLeft: "10px" }}>
        {task?.title}
      </div>

      <div style={{ margin: "auto 0",display:"flex",alignItems:"center",gap: "10px" }}>
        <FormGroup switch>
          <Input
            id={"tooltip" + task?.id}
            style={{
              cursor:"pointer"
            }}
            title="Update status"
            type="switch"
            defaultChecked={task?.status}
            onClick={() => dispatch(updateTask(task?.id,{status : !task?.status}))}
          />
          <Tooltip
            placement="left"
            isOpen={tooltipOpen}
            target={"tooltip" + task?.id}
            toggle={() => setTooltipOpen(!tooltipOpen)}
          >Update Status</Tooltip>
        </FormGroup>
        <Button size="sm" color={task?.status ? "success" : "warning"}>
          {task?.status ? "Completed" : "Pending"}
        </Button>
        <Button size="sm" color="danger" outline onClick={() => dispatch(deleteTaskById(task?.id))}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TasksListItem;
