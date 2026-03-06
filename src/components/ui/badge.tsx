import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        /* ✅ Custom Variants */
        blue:
          "bg-blue-50 border-blue-200 dark:bg-blue-950 text-white",

        green:
          "border-transparent bg-green-800 text-white shadow",

        sky:
          "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300",

        purple:
          "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300",

        red:
          "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300",
        draft: `border-transparent bg-primary text-primary-foreground shadow `,
        active: `border-transparent bg-green-800 text-white shadow`,
        archived: `border-transparent bg-red-400 text-white shadow`,
        beginner:
          "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300",

        intermediate:
          "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300",

        advanced:
          "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
