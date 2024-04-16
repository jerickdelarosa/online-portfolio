<template>
    <section id="feature-projects" class="bg-[#f9f9f9] antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-xl text-[#0E6CC2] font-extrabold uppercase">
                    Projects
                </h2>
                <p class="mt-4 text-base font-semibold text-[#2d2e32] sm:text-xl">
                    Every project is a distinct work of development.
                </p>
            </div>

            <div class="py-16">  
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div :class="`space-y-6 lg:space-y-0 lg:flex lg:items-center lg:gap-12 ${(projectList.length - 1) > index ? 'mb-20' : ''}  text-center lg:text-start`" v-for="(project, index) in projectList" :key="`project-${index}`">
                        <div :class="`md:6/12 lg:w-6/12 ${(index %= 2) == 0 ? 'order-1 lg:order-2' : ''} flex justify-center hover:opacity-75 cursor-pointer`">
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project-img" loading="lazy" class="rounded-lg h-auto md:w-[28rem] lg:w-auto">
                        </div>
                        
                        <div :class="`md:6/12 lg:w-6/12 ${(index %= 2) == 0 ? 'order-2 lg:order-1' : ''}`">
                            <h1 class="font-extrabold uppercase text-2xl mb-5 text-[#2d2e32]">{{ project.title }}</h1>
                            <p class="mt-2 text-gray-600 md:max-w-[32rem] mx-auto lg:mx-0"> {{ project.description }} </p>
                            <div class="mt-6 flex justify-center lg:justify-start gap-1">
                                <span v-for="stack in project.tech" :key="stack.id" class="inline-flex items-center rounded-md bg-[#0E6CC2] px-2 py-1 text-xs text-white font-extrabold tracking-widest">{{ stack.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>

const projectList = [
    {
        id: 'project-1',
        title: 'Records Management System',
        description: 'A management system that allows Philippine Charity Sweepstakes Office to process every record and document. The system makes non-confidential papers and other PCSO content searchable, readable, and printable for the general public over the intranet.',
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET CORE',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            }
        ],
    },
    {
        id: 'project-2',
        title: 'Charity Services Information System',
        description: 'An information system designed to support people looking for financial assistance for medical problems. It is based on the idea of increasing their funds and is carried out in collaboration with public and private hospitals, clinics, pharmacies, and other partners.',
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET CORE',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            }
        ],
    },
    {
        id: 'project-3',
        title: 'Online Event Registration',
        description: 'A website application for Philippine Charity Sweepstakes Office to track, process and dispose organizational document transactions.',
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET CORE',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            }
        ],
    },
    {
        id: 'project-4',
        title: 'Document Tracking System',
        description: 'A website application for Bulacan State University that tracks their organizational document transactions.',
        tech: [
            {
                id: 'stack-1',
                name: 'VUE',
            },
            {
                id: 'stack-2',
                name: 'LARAVEL',
            },
            {
                id: 'stack-3',
                name: 'MySQL',
            }
        ],
    }
]

</script>

<style lang="scss" scoped>

</style>