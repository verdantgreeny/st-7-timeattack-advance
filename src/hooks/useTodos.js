import { useQuery } from "@tanstack/react-query";
import { todoApi } from "../api/todos";

async function fetchTodos() {
  const response = await todoApi.get("/todos");
  return response.data;
}

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}
