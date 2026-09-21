// Placeholder AI endpoint.
//
// This keeps the frontend fully wired up now, so swapping in a real model
// later is a one-file change. To connect a real model:
//   1. `npm install @anthropic-ai/sdk`
//   2. Set ANTHROPIC_API_KEY in your environment (.env, not committed)
//   3. Replace the mock logic below with a real API call, e.g.:
//
//   import Anthropic from '@anthropic-ai/sdk'
//   const anthropic = new Anthropic()
//   const msg = await anthropic.messages.create({
//     model: 'claude-sonnet-4-6',
//     max_tokens: 400,
//     messages: [{ role: 'user', content: prompt }]
//   })
//   const text = msg.content.find(b => b.type === 'text')?.text ?? ''

export default defineEventHandler(async (event) => {
  const body = await readBody<{ mode: string; input: string; context?: Record<string, any> }>(event)
  const { mode, input, context } = body

  // Simulate network latency so the loading state in the UI is visible.
  await new Promise((resolve) => setTimeout(resolve, 600))

  if (mode === 'summary') {
    const role = context?.title || 'professional'
    const text = input?.trim()
      ? `${input.trim()} Known for combining strong technical judgment with clear communication, consistently delivering results that hold up under pressure.`
      : `Results-driven ${role} with a track record of shipping high-impact work, collaborating across teams, and turning ambiguous problems into clear, measurable outcomes.`
    return { result: text }
  }

  if (mode === 'bullet') {
    const text = input?.trim()
      ? `${input.trim()} — driving measurable improvements through focused, collaborative execution.`
      : `Led cross-functional initiatives that improved efficiency and delivered measurable results ahead of schedule.`
    return { result: text }
  }

  return { result: input || '' }
})
