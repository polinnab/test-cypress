import { TodoItemType } from "@/types/todos";

export const ItemsList = ({ items }: { items: TodoItemType[] }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          className="py-2 px-4 rounded-md border-2 border-solid border-white mb-2"
          key={index}
        >
          <input
            className="mr-4"
            type="checkbox"
            checked={item.status === "done"}
          />
          {item.title}
        </div>
      ))}
    </div>
  );
};
