<template>
  <header class="bg-secondary text-white p-6">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-light uppercase">
          Ilsur Khalimov
        </div>
          <nav class="hidden md:block">
            <ul class="flex gap-x-4">
              <li v-for="item in headerLinks" :key="item.name">
                <a :href="item.link"
                @click="useScrollTo(item.link)"
                class="transition hover:text-primary">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </nav>
        
      </div>
    </header>
</template>

<script lang="ts" setup>
const headerLinks = [
  { name: 'Skills', link: '#skills' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
  
];
</script>

<style>

</style>