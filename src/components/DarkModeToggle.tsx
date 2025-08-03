import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true); // 🌙 default is dark

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 text-gray-100 dark:text-yellow-400 hover:text-blue-600 dark:hover:text-white transition-colors"
      title="Toggle Theme"
    >
      {isDark ? (
    <Sun size={20} className="text-yellow-400" />
  ) : (
    <Moon size={20} className="text-blue-600" />
  )}
    </button>
  );
};

export default DarkModeToggle;
