<script setup lang="ts">
const { cv, addSkill, removeSkill } = useCV()
const newSkill = ref('')

function submit() {
  addSkill(newSkill.value)
  newSkill.value = ''
}
</script>

<template>
  <section class="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
    <h2 class="text-sm font-semibold text-slate-800 uppercase tracking-wide">Skills</h2>

    <form @submit.prevent="submit" class="flex gap-2">
      <input v-model="newSkill" type="text" placeholder="e.g. Figma, TypeScript, Negotiation"
        class="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      <button type="submit"
        class="rounded-lg bg-indigo-600 text-white text-sm font-medium px-4 py-2 hover:bg-indigo-700 transition-colors">
        Add
      </button>
    </form>

    <div class="flex flex-wrap gap-2">
      <span v-for="skill in cv.skills" :key="skill"
        class="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full">
        {{ skill }}
        <button type="button" @click="removeSkill(skill)" class="text-indigo-400 hover:text-indigo-600">×</button>
      </span>
      <span v-if="cv.skills.length === 0" class="text-sm text-slate-400">No skills added yet.</span>
    </div>
  </section>
</template>
