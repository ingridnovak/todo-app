import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTodo = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};

export const useDeleteTodo = (currentPage) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      queryClient.setQueryData(["todos", currentPage], (old = []) =>
        old.filter((todo) => todo.id !== id)
      );
    },
    onSuccess: (result, variables, context) => {
      queryClient.setQueryData(["todos", currentPage], (old = []) =>
        old.filter((todo) => todo.id !== variables)
      );
    },
  });
};
