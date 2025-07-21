import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Switch } from "@/components/ui/switch";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Week 3 App</div>

      <div className="space-x-4 flex items-center">
        <Link to="/">
          <Button variant="secondary">Home</Button>
        </Link>
        <Link to="/tasks">
          <Button variant="secondary">Tasks</Button>
        </Link>
        <Link to="/api">
          <Button variant="secondary">API Example</Button>
        </Link>

        {/* Theme toggle */}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm">Dark Mode</span>
          <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}
