import { InputDataType } from "@/app/api/[[...route]]/dmg-calc";
import {
  ClassName,
  getClassPvpDamageModifier,
} from "@/features/get-class-pvp-dmg-modifier";
import { getClassType } from "@/features/get-class-type";

const MAGIC_NUMBER = 16.2330255711145;

export const calcDamage = ({
  atClass,
  skillReference,
  ap,
  aap,
  totalAp,
  totalAap,
  humanDamage,
  attackType,
  critDamage,
  downAttack,
  backAttack,
  airAttack,
  allSpecialAttack,
  accuracy,
  accuracyRate,
  critRate,
  skillDamage,
  skillDamageHitTimes,
  skillPvpDamageReduction,
  dfClass,
  hp,
  drRate,
  meleeDr,
  meleeEvasion,
  meleeEvasionRate,
  rangedDr,
  rangedEvasion,
  rangedEvasionRate,
  magicDr,
  magicEvasion,
  magicEvasionRate,
}: InputDataType) => {
  // Step 0: define class type
  const dfClassType = getClassType(dfClass);

  const typedDr =
    dfClassType === "melee"
      ? meleeDr
      : dfClassType === "magic"
      ? magicDr
      : rangedDr;

  const typedEvasion =
    dfClassType === "melee"
      ? meleeEvasion
      : dfClassType === "magic"
      ? magicEvasion
      : rangedEvasion;

  const typedEvasionRate =
    dfClassType === "melee"
      ? meleeEvasionRate
      : dfClassType === "magic"
      ? magicEvasionRate
      : rangedEvasionRate;

  // Step 1: Calculate AP based on skill type
  let calculatedAp;
  if (skillReference === "awakening") {
    calculatedAp = totalAap + 0.3 * ap - 0.3 * aap - 2;
  } else if (skillReference === "succession") {
    calculatedAp = totalAp + 0.3 * aap - 0.3 * ap - 2;
  } else {
    calculatedAp = totalAp - 2;
  }

  // Step 2: Calculate minimum damage
  const minDamage = calculatedAp * 0.05;

  // Step 3: Initial damage calculation
  let damage = calculatedAp + humanDamage - typedDr;

  // Step 4: Calculate hit rate
  let hitRate =
    0.67 +
    accuracyRate / 100 -
    typedEvasionRate / 100 +
    (accuracy - typedEvasion) * 0.0025;
  hitRate = Math.min(Math.max(hitRate, 0.1), 1); // Clamp hit rate between 10% and 100%

  // Step 5: Apply hit rate
  if (Math.random() > hitRate) {
    damage *= hitRate;
  }

  // Step 6: Ensure damage is not less than minimum damage
  damage = Math.max(damage, minDamage);

  // Step 7: Apply damage reduction
  damage *= 1 - drRate / 100;

  // Step 8: Apply special attack modifiers
  switch (attackType) {
    case "none":
      break;
    case "back":
      damage *= 1.2 + (backAttack + allSpecialAttack) / 100;
      break;
    case "down":
      damage *= 1.2 + (downAttack + allSpecialAttack) / 100;
      break;
    case "air":
      damage *= 1.7 + (airAttack + allSpecialAttack) / 100;
      break;
    default:
      console.warn(`Unknown attack type: ${attackType}`);
  }

  // Step 9: Apply critical hit (assuming critRate is a percentage chance)
  if (Math.random() < critRate / 100) {
    damage *= 2 + critDamage / 100 + allSpecialAttack / 100;
  }

  // Step 10: Apply class PvP damage modifier
  damage *= getClassPvpDamageModifier(
    atClass as ClassName,
    dfClass as ClassName
  );

  // Step 11: Apply skill damage and PvP damage reduction
  damage *= (skillDamage / 100) * (1 - skillPvpDamageReduction / 100);

  // Step 12: Apply number of hit times
  damage *= skillDamageHitTimes;

  // Step 13: Calculate HP Loss
  const hpLoss = damage / MAGIC_NUMBER;

  // Step 14: Calculate HP Loss Percentage
  const hpLossRate = Math.min(hpLoss, hp) / hp;

  return {
    damage: Math.round(damage * 100) / 100,
    hpLoss: Math.round(hpLoss * 100) / 100,
    hitRate: Math.round(hitRate * 100) / 100,
    hpLossRate: Math.round(hpLossRate * 100) / 100,
  };
};
