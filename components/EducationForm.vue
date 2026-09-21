<script setup lang="ts">
const { cv, addEducation, removeEducation } = useCV()
</script>

<template>
  <section class="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-semibold text-slate-800 uppercase tracking-wide">Education</h2>
      <button type="button" @click="addEducation"
        class="text-xs font-medium text-indigo-600 hover:text-indigo-700">+ Add school</button>
    </div>

    <div v-if="cv.education.length === 0" class="text-sm text-slate-400">
      No education added yet.
    </div>

    <div v-for="entry in cv.education" :key="entry.id" class="border border-slate-100 rounded-lg p-4 space-y-3 relative">
      <button type="button" @click="removeEducation(entry.id)"
        class="absolute top-3 right-3 text-slate-300 hover:text-red-500 text-xs">Remove</button>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input v-model="entry.school" type="text" placeholder="School / University"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input v-model="entry.degree" type="text" placeholder="Degree / Field of study"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input v-model="entry.start" type="text" placeholder="Start year"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input v-model="entry.end" type="text" placeholder="End year"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
    </div>
  </section>
</template>
