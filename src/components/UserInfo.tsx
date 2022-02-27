import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { User } from "../types/UserTypes";


interface Props {
  user?: User;
  open: boolean;
  close: () => void;
}

/**
 * Detailed user information popover component
 * 
 * This uses HeadlessUI for the fully accessible popover 
 * 
 * @param user - User data
 * @param open - isOpen boolean
 * @param close - close function
 * @returns 
 */
export default function UserInfo({ user, open, close }: Props) {
  return (<>
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={close}>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm transition-all"></div>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-slate-100 dark:bg-gray-900/90 backdrop-blur shadow-xl rounded-2xl">

              <img src={user?.avatar} alt={user?.first_name + " logo"} className="w-20 h-20 rounded-full inline mr-4" />
              <div className="inline-flex flex-col justify-between">
                <Dialog.Title
                  as="h3"
                  className="items-center gap-4 text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
                  {user?.first_name} {user?.last_name}
                </Dialog.Title>
                <h4 className="font-mono text-sm text-slate-400">{user?.email}</h4>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero asperiores atque qui possimus. Velit cupiditate ut ex, reprehenderit adipisci quos ad facilis corrupti facere aperiam totam earum voluptatum voluptatibus.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 font-semibold transition-colors text-blue-600 dark:text-blue-700 bg-slate-200 dark:bg-slate-100 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={close}>
                  Save
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 font-semibold text-blue-600 dark:text-blue-400 border border-transparent rounded-md hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={close}>
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  </>);
}
