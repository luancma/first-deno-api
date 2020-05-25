import { Router } from "https://deno.land/x/oak/mod.ts";

const getProducts = async ({ response }: { response: any }) => {
  let obj: any = {};

  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => obj = json);

  response.body = {
    data: obj,
  };
};

const usersRouter = new Router();

usersRouter.get("/api/v1/products", getProducts);

export default usersRouter;
