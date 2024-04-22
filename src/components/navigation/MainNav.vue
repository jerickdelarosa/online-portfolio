<template>
  <Disclosure as="nav" class="bg-white shadow-md fixed w-[100vw] z-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex flex-shrink-0 items-center">
            <p class="sm:ml-4 xl:ml-0 text-gray-700 font-extrabold text-xl tracking-wider select-none">JEDERO</p>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name"
              :href="item.href" :class="['text-gray-700 hover:border-b-[#0E6CC2] hover:text-gray-900 border-b-transparent', 'transition-all ease-in-out border-b-[3px] px-4 py-2 text-md font-extrabold']">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="'text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    {
        id: "home",
        name: "Home",
        href: '#home',
    },
    {
        id: "about",
        name: "About",
        href: '#about',
    },
    {
        id: "project",
        name: "Projects",
        href: '#feature-projects',
    },
    {
        id: "contact",
        name: "Contact",
        href: '#contact',
    },
];

</script>