import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  // CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface SidebarMenuCardProps {
  title?: string;
  description?: string;
  href?: string;
  icon?: string;
  imageSrc?: string;
}

export function SidebarMenuCard({
  title = "Design systems meetup",
  description = "A practical talk on component APIs, accessibility, and shipping faster.",
  href = "#",
  imageSrc = "https://avatar.vercel.sh/shadcn1"
}: SidebarMenuCardProps) {

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      {/* <img
        src={imageSrc}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      /> */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={href}>View Event</a>
        </Button>
      </CardFooter>
    </Card>
  )
}