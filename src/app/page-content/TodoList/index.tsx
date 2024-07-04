"use client";

import { useEffect, useState } from "react";
import { ItemsList } from "./ItemsList";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodoList = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await fetch("/database/todos.json");
      const data = await response.json();
      setTodoList(data);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  console.log(todoList);

  return (
    <div>
      <p className="text-2xl font-semibold">List of TODOs</p>
      {isLoading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <div className="mt-4">
          <ItemsList items={todoList} />
        </div>
      )}
    </div>
  );
};
