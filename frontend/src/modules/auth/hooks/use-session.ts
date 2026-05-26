import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/me";




export function useSession() {
     return useQuery({
          queryKey:['session'],
          queryFn: getMe,
          retry: false,
          staleTime: 1000 * 60 * 5, 
     })
}