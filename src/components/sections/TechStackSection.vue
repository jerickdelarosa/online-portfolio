<template>
    <section id="techstack" class="bg-inherit antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 md:py-4 lg:px-6 lg:pt-16">
            <div class="max-w-2xl mx-auto text-center mb-5">
                <h2 class="text-xl text-[#0E6CC2] font-extrabold uppercase">
                    Tech Stack
                </h2>
                <div class="card flex justify-content-center">
                </div>
            </div>
            <div class="p-5 flex justify-center items-center">
                <ul class="flex flex-wrap list-none gap-10 justify-center">
                    <li class="stack--wrapper flex justify-center gap-3">
                        <img class="object-fill w-12 h-12" v-for="stack in stack1" :key="stack.id" :src="stack.icon"
                            :alt="stack.id" />
                    </li>
                    <li class="stack--wrapper flex justify-center gap-3">
                        <img class="object-fill w-12 h-12" v-for="stack in stack2" :key="stack.id" :src="stack.icon"
                            :alt="stack.id" />
                    </li>
                    <li class="stack--wrapper flex justify-center gap-3">
                        <img class="object-fill w-12 h-12" v-for="stack in stack3" :key="stack.id" :src="stack.icon"
                            :alt="stack.id" />
                    </li>
                    <li class="stack--wrapper flex justify-center gap-3">
                        <img class="object-fill w-12 h-12" v-for="stack in stack4" :key="stack.id" :src="stack.icon"
                            :alt="stack.id" />
                    </li>
                    <li class="stack--wrapper flex justify-center gap-3">
                        <img class="object-fill w-12 h-12" v-for="stack in stack5" :key="stack.id" :src="stack.icon"
                            :alt="stack.id" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    angular,
    aspnet,
    blazor,
    bootstrap,
    laravel,
    sass,
    tailwind,
    typescript,
    vueIcon,
    html,
    css,
    javascript
} from '@/assets/stack-icons/index'

const stack1 = [
    {
        id: "stack-1",
        icon: html
    },
    {
        id: "stack-2",
        icon: css
    }
]

const stack2 = [
    {
        id: "stack2-1",
        icon: javascript
    },
    {
        id: "stack2-2",
        icon: typescript
    }
]

const stack3 = [
    {
        id: "stack3-1",
        icon: vueIcon
    },
    {
        id: "stack3-2",
        icon: angular
    },
    {
        id: "stack3-3",
        icon: blazor
    }
]

const stack4 = [
    {
        id: "stack4-1",
        icon: laravel
    },
    {
        id: "stack4-2",
        icon: aspnet
    }
]

const stack5 = [
    {
        id: "stack5-1",
        icon: tailwind
    },
    {
        id: "stack5-2",
        icon: sass
    },
    {
        id: "stack5-3",
        icon: bootstrap
    }
]
</script>

<style lang="scss" scoped>
.stack--wrapper {
    transition: all .2s ease-in-out;

    &:hover {
        transform: translateY(-1rem);
    }
}
</style>