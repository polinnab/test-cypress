"use client";
import useSWR from "swr";

import { ItemsList } from "./ItemsList";

import { fetcher } from "@/utils";

export const TodoList = () => {
  const { data, isLoading } = useSWR("/database/todos.json", fetcher);

  return (
    <div className="flex flex-col justify-center items-center">
      <p data-cy="title" className="text-2xl font-semibold">
        List of TODOs
      </p>
      {isLoading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <div className="mt-4">
          <ItemsList items={data} />
        </div>
      )}
    </div>
  );
};
