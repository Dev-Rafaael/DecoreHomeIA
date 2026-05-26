"use client";

import { UserForm }
from "@/src/modules/user/components/user-form";


import { useSession }
from "@/src/modules/auth/hooks/use-session";
import { useUpdateUser } from "@/src/modules/user/hooks/use-user";

interface Props {
  id: string;
}

export function EditUserPage({
  id
}: Props) {
  const {
    data: session
  } = useSession();

  const user =
    session?.user;

  const {
    mutate: update
  } = useUpdateUser();

  return (
    <div>
      <h1>
        Editar{" "}
        {user?.name ||
          "Usuário"}
      </h1>

      <UserForm
        initialData={
          user || undefined
        }
        onSubmit={(data) =>
          update({
            id,
            data
          })
        }
      />
    </div>
  );
}