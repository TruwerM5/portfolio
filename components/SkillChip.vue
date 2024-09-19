<template>
    <div class="w-[140px] md:w-auto flex items-center gap-1 text-primary justify-center
    bg-white px-4 py-2 rounded-lg shadow transition-transform hover:-translate-y-2">
        <img 
            :src="`./images/skills/${skill.img}`" 
            :alt="skill.name"
            class="w-[25px] sm:w-[30px] lg:w-[45px]"
        />
        <span class="text-lg md:text-2xl">{{ skill.name }}</span>
    </div>
</template>
<script lang="ts" setup>
defineProps<{ skill: { img: string; name: string; } }>()
</script>