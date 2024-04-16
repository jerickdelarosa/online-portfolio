<template>
        <section id="feature-projects" class="bg-[#FEFBF3] antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-700 sm:text-4xl">
                    Projects
                </h2>
                <p class="mt-4 text-base font-normal text-gray-600 sm:text-xl dark:text-gray-400">
                    Every project is a distinct work of development.
                </p>
            </div>
            <div class="container flex flex-col mx-auto">
                <div class="w-full">
                    <div class="container flex flex-col items-center gap-16 mx-auto my-6">

                        
                            <div class="w-full max-w-6xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                                <div class="md:flex items-center -mx-10">
                                    <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                        <div class="relative">
                                            <img :src="ermsUI" class="w-full relative rounded-xl h-48 sm:h-60 lg:h-72" alt="project-img">
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/2 px-10">
                                        <div class="mb-10">
                                            <h1 class="font-extrabold uppercase text-2xl mb-5">Records Management System</h1>
                                            <p class="text-md">A website application for Philippine Charity Sweepstakes Office to track, process and dispose organizational document transactions.</p>
                                        </div>
                                        <div>
                                            <div class="flex gap-1">
                                                <span class="inline-flex items-center rounded-md bg-[#79B4B7] px-2 py-1 text-xs text-white font-extrabold tracking-widest">BLAZOR</span>
                                                <span class="inline-flex items-center rounded-md bg-[#79B4B7] px-2 py-1 text-xs text-white font-extrabold tracking-widest">.NET CORE</span>
                                                <span class="inline-flex items-center rounded-md bg-[#79B4B7] px-2 py-1 text-xs text-white font-extrabold tracking-widest">MySQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ermsUI} from '@/assets/images/index'

</script>

<style lang="scss" scoped>

</style>