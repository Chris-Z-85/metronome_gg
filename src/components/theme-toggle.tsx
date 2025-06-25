import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  isCollapsed?: boolean
}

export function ThemeToggle({ isCollapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex">
      <Button
        variant="ghost"
        size="lg"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={cn(
          "flex items-center gap-3 ml-auto p-7",
          isCollapsed && "justify-center"
        )}
      >
        {theme === "light" ? (
          <Moon />
        ) : (
          <Sun />
        )}
        {!isCollapsed && <span>{theme === "light" ? "Dark" : "Light"} Mode</span>}
      </Button>
    </div>
  )
} 