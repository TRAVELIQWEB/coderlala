{/* Tags/Badges */ }
interface SliderBadgeProps {
  tags: string[];
}

export const SliderBadge = ({ tags }: SliderBadgeProps) => {
  return (
    < div className="hidden md:flex flex-wrap gap-2.5" >
      {
        tags.map((c) => (
          <span key={c} className="text-xs font-medium px-3 py-1.5 bg-card/50 border border-border text-muted-foreground group grid place-items-center p-3 rounded-lg bg-card/50 backdrop-blur-sm transition-all duration-300">
            {c}
          </span>
        ))
      }
    </div >
  )
}