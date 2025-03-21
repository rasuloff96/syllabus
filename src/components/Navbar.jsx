import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="w-full bg-blue-500 dark:bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">📚 Davomat tizimi</h1>
            <div className="flex gap-4 items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "underline font-bold" : "hover:underline"
                    }
                >
                    Davomat
                </NavLink>
                <NavLink
                    to="/add-student"
                    className={({ isActive }) =>
                        isActive ? "underline font-bold" : "hover:underline"
                    }
                >
                    O'quvchi qo'shish
                </NavLink>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        isActive ? "underline font-bold" : "hover:underline"
                    }
                >
                    Statistika
                </NavLink>

                {/* Light/Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                    {darkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
