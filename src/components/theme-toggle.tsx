import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export function ThemeToggle({ isCollapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex self-end">
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`flex items-center gap-3 ml-auto p-7 ${isCollapsed ? "justify-center" : ""}`}
      >
        {theme === "light" ? (
          <FaMoon aria-label="Switch to dark mode" />
        ) : (
          <FaSun aria-label="Switch to light mode" />
        )}
        {!isCollapsed && (
          <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
        )}
      </div>
    </div>
  );
}
