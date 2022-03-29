// Dynamic Routes

import React from "react";
import { useRouter } from "next/router";

const id = () => {
  const router = useRouter();
  const { user_name } = router.query;
  return <div>User id: {user_name}</div>;
};

export default id;
