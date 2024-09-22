<script lang="ts" setup>


useSeoMeta({
  ogTitle: "Ilsur Khalimov's Portfolio",
  ogImage: '/images/banner.jpg'
});


const projects = [
  {
    name: 'Historic Horizon',
    description: 'Full-stack blog about history built with Nuxt, Nest, PostgreSQL and Nginx.',
    image: './images/projects/4.jpg',
    link: 'https://historic-horizon.ru'
  },
  {
    name: 'Adidas Shop',
    description: 'An e-commerce platform built with Vue.js and Nuxt.js.',
    image: './images/projects/1.jpg',
    link: 'https://adidas-theta.vercel.app/'
  },{
    name: 'Tic Tac Toe',
    description: 'This Tic Tac Toe game showcases my skills in modern web development, built using Vue.js.',
    image: './images/projects/3.jpg',
    link: 'https://truwerm5.github.io/tictactoe/'
  },{
    name: 'Quiz App',
    description: 'Quiz to test your knowledge of English',
    image: './images/projects/5.jpg',
    link: 'https://truwerm5.github.io/QuizApp/'
  },{
    name: 'G-Shock Watch Store',
    description: 'E-Commerce Casio G-Shock Watch Store',
    image: './images/projects/6.jpg',
    link: 'https://truwerm5.github.io/g-shock/#/'
  }
];

const skills = [
  // {
  //   id: 1,
  //   name: 'JavaScript',
  //   img: 'js.svg',
  // },
  {
    id: 2,
    name: 'Vue',
    img: 'vue.svg',
  },{
    id: 3,
    name: 'Nuxt',
    img: 'nuxt.svg',
  },{
    id: 4,
    name: 'TypeScript',
    img: 'typescript.svg',
  },{
    id: 5,
    name: 'TailwindCSS',
    img: 'tailwindcss.svg',
  },{
    id: 6,
    name: 'Vite',
    img: 'vite.svg',
  },{
    id: 7,
    name: 'Sass',
    img: 'sass.svg',
  },{
    id: 8,
    name: 'React',
    img: 'react.svg',
  },{
    id: 9,
    name: 'Node.js',
    img: 'node.svg',
  },{
    id: 10,
    name: 'Nest.js',
    img: 'nest.svg',
  },{
    id: 11,
    name: 'Postgres',
    img: 'postgres.svg',
  },{
    id: 12,
    name: 'Prisma',
    img: 'prisma.svg',
  },{
    id: 13,
    name: 'Docker',
    img: 'docker.svg',
  },{
    id: 14,
    name: 'NGINX',
    img: 'nginx.svg',
  },{
    id: 15,
    name: 'Linux',
    img: 'linux.svg',
  },
];

const contacts = [
  {
    id: 1,
    img: 'linkedin.svg',
    href: 'https://www.linkedin.com/in/ilsur-khalimov-9b59821b1/',
    name: 'LinkedIn'
  },{
    id: 2,
    img: 'telegram.svg',
    href: 'https://t.me/raaydan',
    name: 'Telegram'
  },{
    id: 3,
    img: 'github.svg',
    href: 'https://github.com/TruwerM5',
    name: 'Github'
  },
]

</script>

<template>
  <div class="bg-neutral">
    <!-- HEADER -->
     <BaseHeader />
    <!-- HERO SECTION -->
    <section class="bg-secondary text-white py-20">
      <div class="container grid md:grid-cols-2 gap-8">
        <!-- TEXT CONTENT -->
         <div class="col-span-1 flex flex-col justify-center items-start">
          <h1 class="text-5xl mb-4">Hello! I'm Ilsur</h1>
          <p class="text-2xl mb-8">A fullstack developer specializing in Vue & Nuxt.</p>
          <button
            @click="useScrollTo('projects')"
            class="bg-primary text-white px-8 py-4 rounded-full
            hover:bg-opacity-90 transition duration-300">
            View My Work
          </button>
         </div>
         <!-- IMAGE -->
          <div class="col-span-1 flex justify-end">
            <img src="~/assets/images/vue-logo.png" alt="Logo" class="w-full" />
          </div>
      </div>
    </section>
    <!-- SKILLS ME SECTION -->
    <section id="skills"class="py-16 bg-neutral">
      <div class="container mx-auto text-center p-1">
        <!-- AVATAR -->
         <img 
          src="~/assets/images/avatar.png" 
          alt="Avatar"
          class="rounded-full w-48 h-48 mx-auto 
          mb-6 shadow-xl border-4
          border-dashed border-primary"
        />
        <!-- SKILLS TEXT -->
        <p class="text-gray-700 max-w-4xl mx-auto text-lg leading-loose
            mb-6 px-4">
            Hello! I'm Ilsur Khalimov, a fullstack developer with a passion for building 
            performant and user-friendly web applications.
            With expertise in Vue.js and Nuxt.js, I take pride in crafting solutions that are 
            not only functional but also elegantly coded.
        </p>
        <!-- SKILLS -->
         <div class="grid grid-cols-2 justify-items-center gap-2 mb-8 sm:grid-cols-3 md:grid-cols-4 sm:px-8 md:px-0">
          <SkillChip 
            v-for="skill in skills" 
            :key="skill.id" 
            :skill="skill" 
          />
         </div>
      </div>
    </section>

    <CurvedDivider class="bg-[#f7f9fa]" />
    <!-- SHOWCASE -->
     <section id="projects" class="py-16 bg-slate-200">
      <h2 class="text-primary text-3xl mb-8 text-center">My Work</h2>
      <div class="container mx-auto grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProjectShowcase 
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
     </section>
     <CurvedDivider class="bg-[#f7f9fa] rotate-180" />
     <!-- CONTACT -->

     <section id="contact" class="py-16">
      <h2 class="text-primary text-3xl mb-8 text-center">Contact</h2>
        <div class="container mx-auto flex flex-wrap gap-8 justify-center">
          <a
            v-for="contact in contacts"
            :key="contact.id" 
            target="_blank" 
            :href="contact.href" 
            class="flex-1 p-4 shadow-2xl text-center transition-all duration-500 hover:text-primary
            hover:-translate-y-4">
              <img 
                :src="`./images/contact/${contact.img}`" 
                :alt="contact.name" 
                class="w-10 md:w-16 mx-auto"
              />
              <span class="text-center text-sm md:text-2xl">
                {{ contact.name }}
              </span>
          </a>
        </div>
     </section>
  </div>
</template>
