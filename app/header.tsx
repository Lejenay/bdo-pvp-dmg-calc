import { ModeToggle } from "@/components/dark-mode-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-end h-10 w-full my-3">
      <div className="mx-5">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;