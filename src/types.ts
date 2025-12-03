export type Task = {
  id?: string;
  title: string;
  description: string;
  completed?: boolean;
};

export type TaskState = Task[];

export type TaskAction =
  | { type: "ADD"; payload: Task }
  | { type: "TOGGLE"; payload: { id: string } }
  | { type: "REMOVE"; payload: { id: string } };

export type TaskContextType = {
  tasks: TaskState;
  dispatch: React.Dispatch<TaskAction>;
};
