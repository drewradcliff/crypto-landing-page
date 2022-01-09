import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto mt-12 px-5 flex justify-between">
      <div>
        <h1 className="text-7xl font-extrabold max-w-md">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-400">
            Discover
          </span>{" "}
          collect and sell NFTs.
        </h1>
        <h2 className="mt-6 dark:text-gray-300">
          Explore on the world&apos;s best and largest NFT marketplace.
        </h2>
        <button className="bg-gradient-to-r from-pink-300 to-blue-400 text-white px-6 py-2 rounded-md mt-6">
          EXPLORE
        </button>
        <h2 className="mt-32 dark:text-gray-300">Current bid</h2>
        <span className="text-5xl font-bold mr-4">2.00 ETH</span>
        <span className="text-lg">$8046.86</span>
        <h2 className="mt-32 dark:text-gray-300">Aucution ending in</h2>
        <div className="flex space-x-10">
          <div>
            <p className="text-4xl font-bold">06</p>
            <p className="dark:text-gray-300">hours</p>
          </div>
          <div>
            <p className="text-4xl font-bold">26</p>
            <p className="dark:text-gray-300">minutes</p>
          </div>
          <div>
            <p className="text-4xl font-bold">50</p>
            <p className="dark:text-gray-300">seconds</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block ml-10">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
          width={900}
          height={1000}
        />
      </div>
    </div>
  );
}
