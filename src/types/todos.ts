export type TodoStatusType = "new" | "done";

export type TodoItemType = {
  id: string;
  title: string;
  status: TodoStatusType;
};
