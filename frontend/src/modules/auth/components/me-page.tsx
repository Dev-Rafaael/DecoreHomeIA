"use client";

import { useRouter }
from "next/navigation";

import { useLogout }
from "@/src/modules/auth/hooks/use-logout";

import { useSession }
from "@/src/modules/auth/hooks/use-session";

export function MePage() {
  const router = useRouter();

  const logoutMutation =
    useLogout();

  const {
    data: session,
    isLoading
  } = useSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const user =
    session?.user;

  return (
    <div>
      <h1>Me</h1>

      <p>{user?.name}</p>

      <p>{user?.email}</p>

      <p>{user?.role}</p>

      <p>{user?.gender}</p>

      <p>{user?.phone}</p>

      <p>{user?.birthDate}</p>

      <button
        onClick={() =>
          logoutMutation.mutate()
        }
      >
        Logout
      </button>

      <button
        onClick={() =>
          router.push(
            `/me/edit/${user?.id}`
          )
        }
      >
        Editar
      </button>
    </div>
  );
}