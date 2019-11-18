import ISetTaskNameAction from "../interfaces/ISetTaskNameAction";
import ISetTaskDescriptionAction from "../interfaces/ISetTaskDescriptionAction";

type TaskEditorAction = ISetTaskNameAction | ISetTaskDescriptionAction;
export default TaskEditorAction;
