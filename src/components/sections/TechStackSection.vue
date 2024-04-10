<template>
    <section id="techstack">
        <div class="w-100 bg-slate-200">
            <div class="max-w-full px-16 py-8">
                <div class="px-5 py-2 text-center">
                    <p class="text-xl font-semibold">Tech Stack</p>
                </div>
                <div class="p-5 flex justify-center items-center">
                    <ul class="flex flex-wrap list-none gap-10 justify-center">
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack1" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack2" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack3" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack4" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack5" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                    </ul>
                </div>
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
    dotnet,
    laravel,
    sass,
    tailwind,
    typescript,
    vueIcon
} from '@/assets/stack-icons/index'

const stack1 = [
    {
        id: "stack-1",
        icon: vueIcon
    },
    {
        id: "stack-2",
        icon: angular
    }
]

const stack2 = [
    {
        id: "stack2-1",
        icon: typescript
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
        icon: bootstrap
    },
    {
        id: "stack5-3",
        icon: sass
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