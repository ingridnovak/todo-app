import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nanoid } from "nanoid";

const createTodo = async (newTodo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};

export const useCreateTodo = (currentPage) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ["todos", currentPage] });

      const optimisticTodo = {
        id: nanoid(),
        title: variables.title,
        completed: false,
      };

      queryClient.setQueryData(["todos", currentPage], (old = []) => [
        optimisticTodo,
        ...old,
      ]);

      return { optimisticTodo };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(["todos", currentPage], (old = []) =>
        old.filter((todo) => todo.id !== context.optimisticTodo.id)
      );
    },
    retry: false,
  });
};
