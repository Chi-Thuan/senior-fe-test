import { QueryFunction, useQuery } from "@tanstack/react-query";

interface IReactQueryHook<T> {
  queryKey: string[];
  queryFn: QueryFunction<T>;
}
export const useReactQuery = <T>({ queryKey, queryFn }: IReactQueryHook<T>) => {
  return useQuery({
    queryKey,
    queryFn,
  });
};
