import { useMutation } from "@tanstack/react-query";
import { refreshSession } from "../api/refresh";



export function useRefreshSession() {
 
     return useMutation({
          mutationFn: refreshSession,

          onSuccess:(data:any) => {
               
          }
     })
}