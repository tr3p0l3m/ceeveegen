<script setup lang="ts">
const { cv } = useCV()
</script>

<template>
  <section class="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
    <h2 class="text-sm font-semibold text-slate-800 uppercase tracking-wide">Personal Info</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Full name</label>
        <input v-model="cv.fullName" type="text" placeholder="Jane Doe"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Title / Role</label>
        <input v-model="cv.title" type="text" placeholder="Product Designer"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Email</label>
        <input v-model="cv.email" type="email" placeholder="jane@example.com"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Phone</label>
        <input v-model="cv.phone" type="text" placeholder="+256 700 000000"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Location</label>
        <input v-model="cv.location" type="text" placeholder="Kampala, Uganda"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">LinkedIn / Website</label>
        <input v-model="cv.linkedin" type="text" placeholder="linkedin.com/in/janedoe"
          class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between mb-1">
        <label class="block text-xs font-medium text-slate-500">Professional summary</label>
        <AiAssistButton
          mode="summary"
          :input="cv.summary"
          :context="{ title: cv.title }"
          @result="(text) => (cv.summary = text)"
        />
      </div>
      <textarea v-model="cv.summary" rows="3" placeholder="A short pitch about who you are and what you're great at…"
        class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
    </div>
  </section>
</template>
