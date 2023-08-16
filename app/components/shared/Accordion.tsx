"use client";

/* eslint-disable react/no-unescaped-entities */
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC, ReactNode } from "react";

type AccordionProps = {
    title: ReactNode;
    children: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({ title, children }) => {
    return (
        <Disclosure as="div">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl font-bold focus:outline-none focus-visible:ring dark:text-white">
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={clsx(
                                "duration-50 h-4 w-4 transform transition-transform ease-out",
                                {
                                    "rotate-180": open,
                                }
                            )}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400">
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};
