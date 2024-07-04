import { TodoItemType } from "@/types/todos";

export const ItemsList = ({ items }: { items: TodoItemType[] }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};
