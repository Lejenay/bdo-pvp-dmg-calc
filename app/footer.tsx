const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <footer className="w-[720px] h-[70px] border-t-2 bg-white mt-auto">
        <div className="h-full px-3 py-4 flex flex-col gap-2">
          <a href="https://www.reddit.com/r/blackdesertonline/comments/1ews78o/pvp_damage_formula_reversed_pvp_damage_calculator/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-slate-500 text-sm">
            - Original equation (external link)
          </a>
          <a href="https://garmoth.com/characters"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-slate-500 text-sm">
            - Garmoth.com Gear Planner (external link)
          </a>
        </div>
        <div className="h-full flex items-center justify-center">
          <h3 className="text-slate-600 text-sm">
            Copyright © 2024 Lejenay All rights reserved.
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default Footer;