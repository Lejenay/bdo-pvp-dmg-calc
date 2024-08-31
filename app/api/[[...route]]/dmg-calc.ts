import { calcDamage } from "@/features/calc-damage";
import { Hono } from "hono";
import { number, string, z } from "zod";

export const inputDataSchema = z.object({
  atClass: string(),
  skillReference: string(),
  ap: number(),
  aap: number(),
  totalAp: number(),
  totalAap: number(),
  humanDamage: number(),
  attackType: string(),
  critDamage: number(),
  downAttack: number(),
  backAttack: number(),
  airAttack: number(),
  allSpecialAttack: number(),
  accuracy: number(),
  accuracyRate: number(),
  critRate: number(),
  skillDamage: number(),
  skillDamageHitTimes: number(),
  skillPvpDamageReduction: number(),
  dfClass: string(),
  hp: number(),
  drRate: number(),
  meleeDr: number(),
  meleeEvasion: number(),
  meleeEvasionRate: number(),
  rangedDr: number(),
  rangedEvasion: number(),
  rangedEvasionRate: number(),
  magicDr: number(),
  magicEvasion: number(),
  magicEvasionRate: number(),
});

const app = new Hono().post("/", async (c) => {
  const data = await c.req.json();

  try {
    const validatedData = inputDataSchema.parse(data);
    const calculatedDamage = calcDamage(validatedData);
    return c.json(calculatedDamage);
  } catch (error) {
    console.error("Error while fetching data from API", error);
    if (error instanceof z.ZodError) {
      return c.json(
        { error: "Invalid data received from API", details: error.errors },
        500
      );
    }
    return c.json({ error: "Failed to fetch data" }, 500);
  }
});

export type InputDataType = z.infer<typeof inputDataSchema>;

export default app;
