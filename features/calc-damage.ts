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
  const calculateSingleHit = (
    forceCritical: boolean = false,
    forceEvaded: boolean = false
  ) => {
    // Step 0: define class type
    const atClassType = getClassType(atClass);

    const typedDr =
      atClassType === "melee"
        ? meleeDr
        : atClassType === "magic"
        ? magicDr
        : rangedDr;

    const typedEvasion =
      atClassType === "melee"
        ? meleeEvasion
        : atClassType === "magic"
        ? magicEvasion
        : rangedEvasion;

    const typedEvasionRate =
      atClassType === "melee"
        ? meleeEvasionRate
        : atClassType === "magic"
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
    const hitRoll = Math.random();
    let isEvaded = hitRoll > hitRate;
    if (forceEvaded) isEvaded = true;
    if (!forceEvaded && forceCritical) hitRate = 1;
    if (isEvaded) {
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

    // Step 9: Apply critical hit
    let isCritical: boolean;
    if (forceCritical && !forceEvaded) {
      isCritical = true;
    } else if (!forceCritical && forceEvaded) {
      isCritical = critRate >= 100;
    } else if (!forceCritical && !forceEvaded) {
      isCritical = Math.random() < critRate / 100;
    } else {
      isCritical = false; // This case should never happen (forceCritical && forceEvaded)
    }

    if (isCritical) {
      damage *= 2 + critDamage / 100 + allSpecialAttack / 100;
    }

    // Step 10: Apply class PvP damage modifier
    damage *= getClassPvpDamageModifier(
      atClass as ClassName,
      dfClass as ClassName
    );

    // Step 11: Apply skill damage and PvP damage reduction
    damage *= (skillDamage / 100) * (1 - skillPvpDamageReduction / 100);

    return { damage, isEvaded, isCritical, hitRate };
  };

  // Calculate damage for each hit
  let totalDamage = 0;
  let evasionCount = 0;
  let criticalCount = 0;
  let hitRate = 0;
  for (let i = 0; i < skillDamageHitTimes; i++) {
    const result = calculateSingleHit();
    totalDamage += result.damage;
    if (result.isEvaded) evasionCount++;
    if (result.isCritical) criticalCount++;
    hitRate = result.hitRate;
  }

  // Calculate theoretical max and min damage
  const theoreticalMaxDamage = calculateSingleHit(true, false).damage;
  const theoreticalMinDamage = calculateSingleHit(false, true).damage;

  // Step 13: Calculate HP Loss
  const hpLoss = totalDamage / MAGIC_NUMBER;
  const maxHpLoss = (theoreticalMaxDamage * skillDamageHitTimes) / MAGIC_NUMBER;
  const minHpLoss = (theoreticalMinDamage * skillDamageHitTimes) / MAGIC_NUMBER;

  // Step 14: Calculate HP Loss Percentage
  const hpLossRate = Math.min(hpLoss, hp) / hp;

  return {
    hpLoss: Math.round(hpLoss * 100) / 100,
    hpLossRate: Math.round(hpLossRate * 100) / 100,
    hitRate: Math.round(hitRate * 100) / 100,
    evasionRate: Math.round((1 - hitRate) * 100) / 100,
    evasionCount,
    criticalCount,
    skillDamageHitTimes,
    maxHpLoss: Math.round(maxHpLoss * 100) / 100,
    minHpLoss: Math.round(minHpLoss * 100) / 100,
  };
};
