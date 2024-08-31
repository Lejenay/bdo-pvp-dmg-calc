import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  return c.json({ hello: "KON" });
});

export default app;
