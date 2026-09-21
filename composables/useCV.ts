export interface ExperienceEntry {
  id: number
  role: string
  company: string
  start: string
  end: string
  description: string
}

export interface EducationEntry {
  id: number
  school: string
  degree: string
  start: string
  end: string
}

export interface CVData {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  summary: string
  experience: ExperienceEntry[]
  education: EducationEntry[]
  skills: string[]
}

// Shared, app-wide reactive state (Nuxt's useState is SSR-safe and de-duped by key)
export function useCV() {
  const cv = useState<CVData>('cv-data', () => ({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  }))

  function addExperience() {
    cv.value.experience.push({
      id: Date.now(),
      role: '',
      company: '',
      start: '',
      end: '',
      description: ''
    })
  }

  function removeExperience(id: number) {
    cv.value.experience = cv.value.experience.filter(e => e.id !== id)
  }

  function addEducation() {
    cv.value.education.push({
      id: Date.now(),
      school: '',
      degree: '',
      start: '',
      end: ''
    })
  }

  function removeEducation(id: number) {
    cv.value.education = cv.value.education.filter(e => e.id !== id)
  }

  function addSkill(skill: string) {
    const trimmed = skill.trim()
    if (trimmed && !cv.value.skills.includes(trimmed)) {
      cv.value.skills.push(trimmed)
    }
  }

  function removeSkill(skill: string) {
    cv.value.skills = cv.value.skills.filter(s => s !== skill)
  }

  return {
    cv,
    addExperience,
    removeExperience,
    addEducation,
    removeEducation,
    addSkill,
    removeSkill
  }
}
