# PvP Damage Calculator for Black Desert Online

A web-based damage calculator for PvP scenarios in **Black Desert Online**. It helps players understand how stats like AP, DP, DR, Evasion, Accuracy, and Class Modifiers interact under the current PvP mechanics.

🔗 **Live App:** [bdo-pvp-dmg-calc.vercel.app](https://bdo-pvp-dmg-calc.vercel.app)

---

## 🚀 Features

- Supports **AP Brackets**, **DR / Evasion scaling**, and **Hidden stats**
- Takes into account:
  - PvP Damage Reduction modifiers
  - Class-specific Damage Modifiers (Class vs Class)
  - Special Attack modifiers (Down Attack, Back Attack, Crit, etc.)

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/07845468-5912-431a-b301-113712de61eb)

---

## ⚙️ How It Works

This tool implements the latest PvP formula data based on BDO community research.

It calculates the final PvP damage value based on:
1. **Attacker Stats**: AP, Accuracy, Human Damage, Crit hit rate, Special Attack Modifiers etc.
2. **Defender Stats**: HP, DR, Evasion etc.
3. **PvP Damage Formula** from [source](https://www.reddit.com/r/blackdesertonline/comments/1ews78o/pvp_damage_formula_reversed_pvp_damage_calculator/)

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed via [Vercel](https://vercel.com)

---

## 📦 Running Locally

```bash
git clone https://github.com/your-username/bdo-pvp-dmg-calc.git
cd bdo-pvp-dmg-calc

bun install
bun run dev
