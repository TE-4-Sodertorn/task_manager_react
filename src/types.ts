import type { Dispatch } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type TaskDraft = Omit<Task, "id">;

export type TaskState = Task[];

export type TaskAction =
  | { type: "ADD"; payload: TaskDraft }
  | { type: "TOGGLE"; payload: { id: string } }
  | { type: "REMOVE"; payload: { id: string } };

export type TaskContextType = {
  tasks: TaskState;
  dispatch: Dispatch<TaskAction>;
};
