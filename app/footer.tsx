import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image";
import cat_icon from "@/public/cat_fun.svg"
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <footer className="w-[720px] h-[70px] border-t-2 mt-auto">
        <div className="flex items-center justify-between">
          <div className="px-5 py-4 flex flex-col gap-2 w-full">
            <div>
              <a href="https://www.reddit.com/r/blackdesertonline/comments/1ews78o/pvp_damage_formula_reversed_pvp_damage_calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-slate-500 text-sm dark:text-slate-300">
                - Original formula on Reddit (外部リンク)
              </a>
            </div>
            <div>
              <a href="https://garmoth.com/characters"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-slate-500 text-sm dark:text-slate-300">
                - Garmoth.com Gear Planner (外部リンク)
              </a>
            </div>
            <div>
              <a href="https://github.com/Lejenay/bdo-pvp-dmg-calc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-slate-500 text-sm dark:text-slate-300">
                - View on Github (外部リンク)
              </a>
            </div>
          </div>
          <div className="px-5">
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={cat_icon}
                  width={64}
                  height={64}
                  alt="cat icon"
                  className="cursor-pointer" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>「砂漠は遊びじゃないんだよ」</DialogTitle>
                  <DialogDescription className="text-right mx-10">
                    <p className="italic">あふん二世</p>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      理解した
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <h3 className="text-slate-600 dark:text-slate-300 text-sm">
            Copyright © 2024 Lejenay All rights reserved.
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default Footer;