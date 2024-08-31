import { Hono } from "hono";
import { handle } from "hono/vercel";
import dmgCalc from "./dmg-calc";
import test from "./test";

export const runtime = "edge";

const app = new Hono().basePath("/api");
app.route("/dmg-calc", dmgCalc);
app.route("/test", test);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof app;
