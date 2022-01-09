import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-[8px] container mx-auto flex p-5 items-center justify-between">
      <a className="text-4xl font-bold">nft.io</a>
      <nav className="ml-auto mr-auto md:flex hidden text-md text-gray-800">
        <a className="mr-5">Market</a>
        <a className="mr-5">Activity</a>
        <a className="mr-5">Community</a>
        <a>Connect Wallet</a>
      </nav>
      <Dropdown />
    </header>
  );
}
