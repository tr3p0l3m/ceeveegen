<script setup lang="ts">
const { cv, addExperience, removeExperience } = useCV()
</script>

<template>
  <section class="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-semibold text-slate-800 uppercase tracking-wide">Experience</h2>
      <button type="button" @click="addExperience"
        class="text-xs font-medium text-indigo-600 hover:text-indigo-700">+ Add role</button>
    </div>

    <div v-if="cv.experience.length === 0" class="text-sm text-slate-400">
      No experience added yet.
    </div>

    <div v-for="entry in cv.experience" :key="entry.id" class="border border-slate-100 rounded-lg p-4 space-y-3 relative">
      <button type="button" @click="removeExperience(entry.id)"
        class="absolute top-3 right-3 text-slate-300 hover:text-red-500 text-xs">Remove</button>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input v-model="entry.role" type="text" placeholder="Role title"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input v-model="entry.company" type="text" placeholder="Company"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input v-model="entry.start" type="text" placeholder="Start (e.g. Jan 2022)"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input v-model="entry.end" type="text" placeholder="End (e.g. Present)"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div>
        <div class="flex items-center justify-between mb-1">
          <label class="block text-xs font-medium text-slate-500">Description</label>
          <AiAssistButton
            mode="bullet"
            :input="entry.description"
            :context="{ role: entry.role, company: entry.company }"
            @result="(text) => (entry.description = text)"
          />
        </div>
        <textarea v-model="entry.description" rows="2" placeholder="What did you do and what changed because of it?"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
      </div>
    </div>
  </section>
</template>
