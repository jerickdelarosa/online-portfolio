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



            <div class="mt-16">
                <div class="flex flex-row gap-6 flex-wrap justify-center">
                    
                    <template v-for="(project, index) in projectList.reverse()" :key="`project-${index}`"> 
                        <ProjectCard
                            class-settings="w-full md:w-9/12 lg:w-5/12"
                            :image="project.img"
                            :date="project.date"
                            :title="project.title"
                            :description="project.description"
                        />
                    </template>

                </div>
            </div>


            
        </div>
    </section>
</template>

<script setup>
import { uiDesign } from '@/assets/icons';
import { eRegistrationUI, ermsUI, dtsUI, csisUI } from '@/assets/images';
import ProjectCard from '@/components/cards/ProjectCard.vue';

const projectList = [
    {
        id: 'project-1',
        title: 'Document Tracking System',
        description: 'A tracking system designed to efficiently manage and monitor the flow of important documents within the institution. It streamlines processes such as submission, review, approval, ensuring transparency, accountability, and compliance with relevant regulations.',
        date: '2022',
        img: dtsUI,
        tech: [
            {
                id: 'stack-1',
                name: 'VUE 2',
            },
            {
                id: 'stack-2',
                name: 'LARAVEL 8',
            },
            {
                id: 'stack-3',
                name: 'MySQL',
            },
            {
                id: 'stack-4',
                name: 'VUETIFY',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    },
    {
        id: 'project-2',
        title: 'Online Event Registration',
        description: 'A digital platform designed to facilitate the seamless registration process for citizens attending agency-hosted events and activities. Through this system, individuals can easily sign up for events, workshops, and seminars, providing necessary information and preferences.',
        date: '2023',
        img: eRegistrationUI,
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET 6',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            },
            {
                id: 'stack-4',
                name: 'MUDBLAZOR',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    },
    {
        id: 'project-3',
        title: 'Medical Assistance Program System',
        description: 'An information system designed to support people looking for financial assistance for medical problems. It is based on the idea of increasing their funds and is carried out in collaboration with public and private hospitals, clinics, pharmacies, and other partners.',
        date: '2024',
        img: csisUI,
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET 8',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            },
            {
                id: 'stack-4',
                name: 'MUDBLAZOR',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    },
    {
        id: 'project-4',
        title: 'Records Management System',
        description: 'A management system that allows Philippine Charity Sweepstakes Office to process every record and document. The system makes non-confidential papers and other PCSO content searchable, readable, and printable for the general public over the intranet.',
        date: '2024',
        img: ermsUI,
        tech: [
            {
                id: 'stack-1',
                name: 'BLAZOR',
            },
            {
                id: 'stack-2',
                name: '.NET 8',
            },
            {
                id: 'stack-3',
                name: 'MSSQL',
            },
            {
                id: 'stack-4',
                name: 'MUDBLAZOR',
            },
            {
                id: 'stack-5',
                name: 'BOOTSTRAP',
            }
        ],
    }

]

</script>

<style lang="scss">
.p-image-toolbar {
    color: #f8f9fa;
}
</style>