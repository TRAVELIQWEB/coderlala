import { LucideIcon } from "lucide-react"

export interface ComboboxProps {
  icon?: LucideIcon
  label: string
  options: string[]
  value?: string
  onChange: (val: string) => void
  className?: string   // 👈 controls width
}


export interface ComboboxMultipleProps {
  icon?: LucideIcon
  label: string
  options: string[]
  value: string[]
  onChange: (val: string[]) => void
  className?: string
  error?: boolean          // ✅ add this
  errorMessage?: string    // ✅ add this
}

export interface ComboboxSingleProps {
  icon?: LucideIcon
  label: string
  options: string[]
  value?: string
  onChange: (val: string) => void
  className?: string

  // ✅ ADD THESE
  error?: boolean
  errorMessage?: string
}