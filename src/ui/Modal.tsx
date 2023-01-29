'use client'

import React, { Fragment, PropsWithChildren } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { cva, VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

const modalStyles = cva('relative w-full transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all', {
  variants: {
    size: {
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      "full": "max-w-full",
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface Props extends VariantProps<typeof modalStyles> {
  title?: string;
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  title,
  open,
  onClose,
  size,
  children,
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='fixed inset-0 bg-black/25' aria-hidden="true" />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='center min-h-full p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={modalStyles({ size })}>
                <button type="button" className='absolute z-20 top-2 right-2 text-gray-500 hover:text-gray-700' onClick={onClose}>
                  <X size={24} />
                </button>
                { title && (
                  <Dialog.Title as='h3' className='text-2xl leading-6 text-site-dark-blue'>
                    {title}
                  </Dialog.Title>
                )}
                <div className={title ? 'mt-2' : ''}>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
