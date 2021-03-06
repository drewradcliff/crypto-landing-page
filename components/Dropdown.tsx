import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiMenu } from "react-icons/hi";

export default function Dropdown() {
  return (
    <div className="md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2">
            <HiMenu className="h-5 w-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-blue-400 text-white"
                        : "text-gray-900 dark:text-gray-300"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Market
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-blue-400 text-white"
                        : "text-gray-900 dark:text-gray-300"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Activity
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-blue-400 text-white"
                        : "text-gray-900 dark:text-gray-300"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Community
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-blue-400 text-white"
                        : "text-gray-900 dark:text-gray-300"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Connect Wallet
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
