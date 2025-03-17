<template>
    <footer class="bg-gray-700 py-5 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div
                class="mx-auto md:mx-12 flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-6">
                <div>
                    <span class="text-md text-slate-50 font-extrabold">Copyright © {{ new Date().getFullYear() }}. All rights are reserved</span>
                
                </div>
                <div>
                    <div class="flex space-x-4 sm:justify-center sm:mt-0">
                        <a v-for="link in mediaLinks" :key="link.id" :href="link.href"
                            class="cursor-pointer footer--icons" target="_blank">
                            <img :src="link.icon" :alt="link.id" class="w-8 h-8 object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { githubLogo, linkedinLogo } from '@/assets/icons/index'

const mediaLinks = [
    {
        id: "media-1",
        name: "linkedin",
        href: "https://www.linkedin.com/in/delarosa-jerick-t/",
        icon: linkedinLogo
    },
    {
        id: "media-2",
        name: "github",
        href: "https://github.com/jerickdelarosa",
        icon: githubLogo
    }
]
</script>

<style lang="scss" scoped>
.footer--icons {
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
}
</style>