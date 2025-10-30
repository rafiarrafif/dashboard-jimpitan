import { signIn } from "next-auth/react";
import React from "react";

const page = async () => {
  await signIn("google", { redirectTo: "/" });
  return <div>page</div>;
};

export default page;
