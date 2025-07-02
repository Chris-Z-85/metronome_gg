import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export function ThemeToggle({ isCollapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex self-end">
      <Button
        variant="ghost"
        size="lg"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={cn(
          "flex items-center gap-3 ml-auto p-7",
          isCollapsed && "justify-center"
        )}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
        {!isCollapsed && (
          <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
        )}
      </Button>
    </div>
  );
}
