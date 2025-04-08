import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useCreateTodo } from "../../../hooks/useCreateTodo";
import { useDeleteTodo } from "../../../hooks/useDeleteTodo";
import Pagination from "../Pagination/pagination";
import Create from "../CreateToDo/create";

const fetchList = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", currentPage],
    queryFn: () => fetchList(currentPage),
    keepPreviousData: true,
  });

  const mutationAdd = useCreateTodo(currentPage);
  const mutationDelete = useDeleteTodo(currentPage);

  const onCreateTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    mutationAdd.mutate({ title });
    setTitle("");
  };

  const onDeleteTodo = (id) => {
    mutationDelete.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      <Create
        mutationAdd={mutationAdd}
        onCreateTodo={onCreateTodo}
        setTitle={setTitle}
        title={title}
      />
      {data.map((todo, i) => (
        <div
          className="py-6 px-2 text-lg border-b border-gray-100 border-opacity-25"
          key={i}
        >
          <div className="flex justify-between">
            <div
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {i + 1}. {todo.title}
            </div>
            <div>
              <button onClick={() => onDeleteTodo(todo.id)}>
                <Image
                  className="cursor-pointer peer relative"
                  src="/trash.svg"
                  alt="trash icon"
                  width={20}
                  height={5}
                  priority
                />
                <div
                  id="tooltip-default"
                  role="tooltip"
                  className="absolute right-64 z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-md opacity-0 transition-opacity duration-300 peer-hover:opacity-100"
                >
                  Delete todo
                </div>
              </button>
              <input
                type="checkbox"
                id={i}
                onChange={() => {
                  let ifDone = { ...todo, completed: !todo.completed };
                  queryClient.setQueryData(["todos", currentPage], (old = []) =>
                    old.map((oldTodo) =>
                      oldTodo.id === todo.id ? ifDone : oldTodo
                    )
                  );
                }}
                checked={todo.completed}
                className="peer relative hidden"
              />
              <div
                id="tooltip-default"
                role="tooltip"
                className="absolute right-64 z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-md opacity-0 transition-opacity duration-300 peer-hover:opacity-100"
              >
                Mark if done
              </div>
              <label
                htmlFor={i}
                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-green-500 rounded-md overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-green-500"
                  viewBox="0 0 520 520"
                >
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check"
                    data-original="#000000"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
