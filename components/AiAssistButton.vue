<script setup lang="ts">
const props = defineProps<{
  mode: 'summary' | 'bullet'
  input: string
  context?: Record<string, any>
}>()

const emit = defineEmits<{
  (e: 'result', value: string): void
}>()

const loading = ref(false)
const error = ref('')

async function generate() {
  loading.value = true
  error.value = ''
  try {
    const { result } = await $fetch<{ result: string }>('/api/ai-assist', {
      method: 'POST',
      body: { mode: props.mode, input: props.input, context: props.context }
    })
    emit('result', result)
  } catch (e) {
    error.value = 'Could not reach the AI assistant. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="inline-flex flex-col items-start gap-1">
    <button
      type="button"
      :disabled="loading"
      @click="generate"
      class="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 disabled:text-slate-400 transition-colors"
    >
      <svg v-if="!loading" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a1 1 0 01.894.553l1.382 2.764 3.05.443a1 1 0 01.554 1.706l-2.207 2.152.521 3.037a1 1 0 01-1.451 1.054L10 12.347l-2.723 1.362a1 1 0 01-1.451-1.054l.521-3.037L4.14 7.466a1 1 0 01.554-1.706l3.05-.443L9.106 2.553A1 1 0 0110 2z" />
      </svg>
      <svg v-else class="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
      {{ loading ? 'Thinking…' : 'Improve with AI' }}
    </button>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>
