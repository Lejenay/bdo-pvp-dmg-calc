const meleeClasses = new Set([
  "warrior",
  "guardian",
  "lahn",
  "berserker",
  "shai",
  "striker",
  "musa",
  "maehwa",
  "mystic",
  "valkyrie",
  "kunoichi",
  "ninja",
  "nova",
  "corsair",
  "drakania",
  "dosa",
]);

const magicClasses = new Set([
  "hashashin",
  "sorceress",
  "tamer",
  "dk",
  "wizard",
  "witch",
  "sage",
  "woosa",
  "maegu",
  "scholar",
]);

const rangedClasses = new Set(["ranger", "archer"]);

export const getClassType = (className: string): string => {
  const normalizedClassName = className.toLowerCase();

  if (meleeClasses.has(normalizedClassName)) {
    return "melee";
  } else if (magicClasses.has(normalizedClassName)) {
    return "magic";
  } else if (rangedClasses.has(normalizedClassName)) {
    return "ranged";
  } else {
    console.warn(`Unknown class: ${className}. Defaulting to melee type.`);
    return "melee";
  }
};
