<template>
    <section id="home" class="bg-[#f9f9f9] antialiased xl:h-screen">
        <div class="max-w-screen-xl px-4 pt-24 mx-auto lg:px-6 sm:pt-16 lg:pt-24 xl:pt-0 xl:h-full xl:block xl:content-center">
            <div
                class="container mx-auto flex md:px-24 md:pt-16 md:pb-4 lg:pt-8 lg:pr-8 lg:pb-4 xl:px-32 xl:pb-8 lg:flex-row flex-col items-center">
                <div class="lg:w-full mb-0 flex justify-center lg:order-2">
                    <img class="object-cover object-center rounded-full w-60 h-60 xs:w-72 xs:h-72 lg:w-80 lg:h-80 border-4 border-gray-700"
                        alt="hero_img" :src="heroImage">
                </div>
                <div
                    class="lg:flex-grow mt-12 mb-12 md:mb-6 lg:mb-0 lg:mt-0 lg:w-1.5/2 lg:pl-8 xl:pl-20 flex flex-col lg:items-start lg:text-left items-center text-center lg:order-1">
                    <h1
                        class="text-3xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                        Hi, I'm Jerick
                    </h1>
                    <p class="mb-8 pl-2 pr-2  lg:px-0 leading-relaxed">
                        A full-stack web developer with passion for web development, based in Bulacan, Philippines
                    </p>
                    <div class="flex justify-center gap-3">
                        <a v-for="link in mediaLinks" :key="link.id" :href="link.href"
                            class="cursor-pointer media--icons" target="_blank">
                            <img :src="link.icon" :alt="link.id" class="w-8 h-8 object-contain" />
                        </a>
                    </div>
                </div>
            </div>

            <TechStackSection />
        </div>
    </section>
</template>

<script setup>
import TechStackSection from '@/components/sections/TechStackSection.vue'
import { heroImage } from '@/assets/images'
import { linkedinBlackLogo, githubBlackLogo } from '@/assets/icons';

const mediaLinks = [
    {
        id: "media-1",
        name: "linkedin",
        href: "https://www.linkedin.com/in/delarosa-jerick-t/",
        icon: linkedinBlackLogo
    },
    {
        id: "media-2",
        name: "github",
        href: "https://github.com/jerickdelarosa",
        icon: githubBlackLogo
    }

]
</script>

<style lang="scss" scoped>
.media--icons {
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
}
</style>