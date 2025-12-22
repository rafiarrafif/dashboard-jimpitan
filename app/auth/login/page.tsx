import { signIn } from "@/auth";
import SignIn from "@/features/auth/ui/SignIn";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-3xl font-semibold text-neutral-900">Admin Area</h1>
        <h3 className="text-neutral-600">Silahkan login terlebih dahulu</h3>
      </div>
      <div className="mx-4 mt-6">
        <form
          action={async () => {
            "use server";
            await signIn("google", { callbackURL: "/admin" });
          }}
        >
          <SignIn />
        </form>
      </div>
    </div>
  );
};

export default page;
