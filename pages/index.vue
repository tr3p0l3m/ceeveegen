<script setup lang="ts">
function printCV() {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <header class="border-b border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-7 w-7 rounded-md bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">C</div>
          <span class="font-semibold text-slate-800">CV Builder</span>
          <span class="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-0.5 rounded-full ml-1">AI-assisted</span>
        </div>
        <button @click="printCV"
          class="rounded-lg bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 transition-colors">
          Download / Print PDF
        </button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="space-y-6 print:hidden">
        <PersonalInfoForm />
        <ExperienceForm />
        <EducationForm />
        <SkillsForm />
      </div>

      <div class="lg:sticky lg:top-8 self-start">
        <CVPreview />
      </div>
    </main>
  </div>
</template>
