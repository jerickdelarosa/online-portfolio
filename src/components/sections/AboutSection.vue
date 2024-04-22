<template>
    <section id="about" class="bg-inherit antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="py-16">
                <div class="container m-auto text-gray-600 md:px-12 xl:px-6">
                    <div
                        class="space-y-6 lg:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 text-center lg:text-start">
                        <div class="md:5/12 lg:w-6/12 md:max-w-[32rem] mx-auto flex justify-center">
                            <img :src="codingLaptopImg" alt="image" loading="lazy" width="" height=""
                                class="rounded-lg">
                        </div>
                        <div class="md:7/12 lg:w-6/12 md:max-w-[32rem] mx-auto">
                            <h2 class="text-xl text-[#0E6CC2] font-extrabold uppercase">About Me</h2>
                            <p class="mt-4 text-gray-600 text-justify">A full-stack web developer who has always been
                                passionate about coding. Although I have gained considerable knowledge in this field, I
                                am always eager to learn more, and I believe that keeps me motivated. </p>

                            <div class="mt-6 flex justify-center md:justify-start md:px-12 lg:px-0">
                                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 ">
                                    <div v-for="feature in features" :key="feature.name"
                                        class="relative pl-16 text-start">
                                        <dt class="text-base font-semibold leading-7 text-gray-900">
                                            <div
                                                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0E6CC2]">
                                                <component :is="feature.icon" class="h-6 w-6 text-white"
                                                    aria-hidden="true" />
                                            </div>
                                            <span class="font-extrabold">{{ feature.name }}</span>
                                        </dt>
                                        <dd class="mt-2 text-base leading-7 text-gray-600 text-justify">{{
                                feature.description }}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { LightBulbIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import { codingLaptopImg } from '@/assets/images/index'

const features = [
    {
        name: 'Ideas',
        description:
            "Maximizing the project's capability based on the client's requirements.",
        icon: LightBulbIcon,
    },
    /* {
      name: 'Design',
      description:
        'The project ensures a user-friendly and modern interface style.',
      icon: PaintBrushIcon,
    }, */
    {
        name: 'Code',
        description:
            'Modern and contemporary codes are utilized in every project.',
        icon: CodeBracketIcon,
    },
]
</script>

<style lang="scss" scoped></style>