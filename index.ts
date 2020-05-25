import { Application } from "https://deno.land/x/oak/mod.ts";
import usersRouter from "./routes/posts.router.ts";

const port = 8000;

const app = new Application();

app.use(usersRouter.routes());
await app.listen({ port });
