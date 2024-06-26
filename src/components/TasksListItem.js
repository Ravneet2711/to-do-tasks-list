import React,{useState} from "react";
import { deleteTaskById,updateTask } from "../redux/taskActions";
import { useDispatch } from "react-redux";
import { FormGroup, Tooltip, Input } from 'reactstrap';
import { FiAlertCircle, FiCheckCircle,FiXCircle } from "react-icons/fi";
import useScreenSize from "../hooks/useScreenSize";

const TasksListItem = ({ task }) => {
  const isSmallScreen = useScreenSize()
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
          height: isSmallScreen ? "32px":"40px",
          width: isSmallScreen ? "32px":"40px",
          lineHeight: isSmallScreen ? "32px":"40px",
          borderRadius: "50%",
          color: "white",
          fontWeight: "bold",
          background: stringToHSLColor(task.title + task?.title?.slice(-1)),
          flexShrink:0,
          fontSize:isSmallScreen? "12px":"17px"
        }}
      >
        {!!task && !!task.title
          ? task?.title[0].toUpperCase() + task?.title?.slice(-1).toUpperCase()
          : ""}
      </div>
      <div style={{margin: "auto 8px", flexGrow: 1, fontSize: isSmallScreen?"16px":""}} >
        {task?.title}
      </div>

      <div style={{ margin: "auto 0",display:"flex",alignItems:"center",gap: "8px" }}>
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
          >Mark as {task?.status ? "pending" : "completed"}</Tooltip>
        </FormGroup>

        {task?.status ? 
          <FiCheckCircle color="green" size={22} style={{flexShrink:0}} title="Completed" />
          :
          <FiAlertCircle color="#FFB302" size={22} style={{flexShrink:0}} title="Pending" />
        }

        <FiXCircle color="#DC3545" size={22} style={{flexShrink:0,cursor:"pointer"}} 
          title="Delete task"
          onClick={() => dispatch(deleteTaskById(task?.id))}
        />
      </div>
    </div>
  );
};

export default TasksListItem;