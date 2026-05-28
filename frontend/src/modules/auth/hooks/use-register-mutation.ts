"use client";

import {
  useMutation
} from "@tanstack/react-query";

import { useRouter }
from "next/navigation";

import { toast }
from "react-toastify";

import { register }
from "../api/register";

export function useRegisterMutation() {
  const router =
    useRouter();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success(
        "Account created successfully"
      );

      router.push("/login");
    },

    onError: () => {
      toast.error(
        "Error creating account"
      );
    }
  });
}