import { Search, Moon, Sun, Bell, Menu } from "lucide-react"

export default function Navbar({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 flex items-center justify-between shadow-md">
      <button className="lg:hidden text-gray-600 dark:text-gray-300 mr-4" onClick={() => setSidebarOpen(true)}>
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <Bell className="h-5 w-5" />
        </button>
        <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
      </div>
    </header>
  )
}
