import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 dark:bg-gray-900/60 bg-white/60 backdrop-blur-[8px] container mx-auto flex p-5 items-center justify-between dark:text-white">
      <a className="text-4xl font-bold">nft.io</a>
      <nav className="mx-auto md:flex space-x-10 hidden text-md text-gray-800 dark:text-gray-400">
        <a className="dark:hover:text-white">Market</a>
        <a className="dark:hover:text-white">Activity</a>
        <a className="dark:hover:text-white">Community</a>
        <a className="dark:hover:text-white">Connect Wallet</a>
      </nav>
      <Dropdown />
    </header>
  );
}
