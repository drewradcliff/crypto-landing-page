import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="container mx-auto p-5 mt-12 flex-column">
      <h1 className="text-center text-4xl">nft.io</h1>
      <div className="flex space-x-6 justify-center mt-4 dark:text-gray-300">
        <a className="dark:hover:text-white">FAQ</a>
        <a className="dark:hover:text-white">Privacy Policy</a>
        <a className="dark:hover:text-white">Terms of Service</a>
      </div>
      <div className="flex space-x-6 justify-center my-4">
        <a className="bg-blue-300 dark:bg-gray-700 rounded-full p-[10px]">
          <AiFillFacebook className="text-white" />
        </a>
        <a className="bg-blue-300 dark:bg-gray-700 rounded-full p-[10px]">
          <AiOutlineTwitter className="text-white" />
        </a>
        <a className="bg-blue-300 dark:bg-gray-700 rounded-full p-[10px]">
          <AiFillInstagram className="text-white" />
        </a>
      </div>
    </footer>
  );
}
