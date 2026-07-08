import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDashboard, updateEventStatus } from "./api";

export const useDashboard = () => useQuery({ queryKey: ["dashboard"], queryFn: getDashboard, staleTime: 30_000 });

export const useUpdateEventStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => updateEventStatus(id, status),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["dashboard"] }),
  });
};
