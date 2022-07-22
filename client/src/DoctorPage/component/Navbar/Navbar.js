import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../component/NavBar/image/logo.svg";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";


const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  function removeLogin() {
    localStorage.clear();
    window.location.href = "drhome";
  }

  function LoginCheck() {
    if (!localStorage.token) {
      return (
        <div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 setfont"
              to={"/signin"}
            >
              Signin
            </Link>
            <Link
              to={"/signup"}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 setfont"
            >
              Signup
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <button
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 setfont"
              onClick={removeLogin.bind()}
            >
              Sign out
            </button>
          </div>
        </div>
      );
    }
  }

  function LoginCheckMobile() {
    if (!localStorage.token) {
      return (
        <div>
          <div>
            <Link
              to={"/signup"}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 setfont"
            >
              Signup
            </Link>
            <p className="mt-6 text-center text-base font-medium text-gray-500 setfont">
              Existing customer?{" "}
              <Link
                to={"/signin"}
                className="text-indigo-600 hover:text-indigo-500 setfont"
              >
                Signin
              </Link>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <button
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 setfont"
              onClick={removeLogin.bind()}
            >
              Sign out
            </button>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="Zindex setfont">
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link className="" to={"/drhome"}>
                <img className="LogoD-home" src={Logo} alt="/drhome" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link
                className="text-base font-medium text-gray-500 hover:text-gray-900 setfont"
                to={"/drhome"}
              >
                Home
              </Link>
              <Link
                className="text-base font-medium text-gray-500 hover:text-gray-900 setfont"
                to={"/phhome"}
              >
                Pharmacy
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >

                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                          </div>

                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 setfont"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 setfont">
                                    {item.name}
                                  </span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {LoginCheck()}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={Logo} alt="Medisute" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only setfont">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 setfont"
                      to={"/phhome"}
                    >
                      pharmacy
                    </Link>

                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">{LoginCheckMobile()}</div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
