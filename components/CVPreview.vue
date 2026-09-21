<script setup lang="ts">
const { cv } = useCV()
</script>

<template>
  <div id="cv-preview" class="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-[720px] mx-auto min-h-[900px] font-serif text-slate-800">
    <header class="border-b border-slate-200 pb-4 mb-5">
      <h1 class="text-3xl font-bold tracking-tight">{{ cv.fullName || 'Your Name' }}</h1>
      <p v-if="cv.title" class="text-indigo-600 font-medium mt-1">{{ cv.title }}</p>
      <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 mt-3 font-sans">
        <span v-if="cv.email">{{ cv.email }}</span>
        <span v-if="cv.phone">· {{ cv.phone }}</span>
        <span v-if="cv.location">· {{ cv.location }}</span>
        <span v-if="cv.linkedin">· {{ cv.linkedin }}</span>
      </div>
    </header>

    <section v-if="cv.summary" class="mb-6">
      <h2 class="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-2">Summary</h2>
      <p class="text-sm leading-relaxed">{{ cv.summary }}</p>
    </section>

    <section v-if="cv.experience.length" class="mb-6">
      <h2 class="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-2">Experience</h2>
      <div v-for="entry in cv.experience" :key="entry.id" class="mb-4 last:mb-0">
        <div class="flex justify-between items-baseline">
          <p class="font-semibold text-sm">{{ entry.role || 'Role' }} <span v-if="entry.company" class="font-normal text-slate-500">— {{ entry.company }}</span></p>
          <p class="text-xs text-slate-400 font-sans whitespace-nowrap ml-2">{{ entry.start }}<span v-if="entry.start || entry.end"> – </span>{{ entry.end }}</p>
        </div>
        <p v-if="entry.description" class="text-sm text-slate-600 mt-1 leading-relaxed">{{ entry.description }}</p>
      </div>
    </section>

    <section v-if="cv.education.length" class="mb-6">
      <h2 class="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-2">Education</h2>
      <div v-for="entry in cv.education" :key="entry.id" class="mb-3 last:mb-0">
        <div class="flex justify-between items-baseline">
          <p class="font-semibold text-sm">{{ entry.school || 'School' }}</p>
          <p class="text-xs text-slate-400 font-sans whitespace-nowrap ml-2">{{ entry.start }}<span v-if="entry.start || entry.end"> – </span>{{ entry.end }}</p>
        </div>
        <p v-if="entry.degree" class="text-sm text-slate-600">{{ entry.degree }}</p>
      </div>
    </section>

    <section v-if="cv.skills.length">
      <h2 class="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-2">Skills</h2>
      <p class="text-sm text-slate-600">{{ cv.skills.join(' · ') }}</p>
    </section>

    <div v-if="!cv.fullName && !cv.summary && !cv.experience.length && !cv.education.length && !cv.skills.length"
      class="flex items-center justify-center h-64 text-slate-300 text-sm font-sans">
      Fill in the form to see your CV take shape here.
    </div>
  </div>
</template>
