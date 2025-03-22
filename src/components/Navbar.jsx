import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-600 dark:bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-lg">

            <NavLink
                to="/"
            >
                <h1 className="text-2xl font-bold tracking-wide">📚 Davomat tizimi</h1>
            </NavLink>

            <div className="flex gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition-all ${isActive
                            ? "bg-white text-blue-600 dark:bg-gray-700 dark:text-yellow-400 font-bold shadow-md"
                            : "hover:bg-blue-500 dark:hover:bg-gray-700 text-gray-200 dark:text-gray-300"
                        }`
                    }
                >
                    Davomat
                </NavLink>
                <NavLink
                    to="/add-student"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition-all ${isActive
                            ? "bg-white text-blue-600 dark:bg-gray-700 dark:text-yellow-400 font-bold shadow-md"
                            : "hover:bg-blue-500 dark:hover:bg-gray-700 text-gray-200 dark:text-gray-300"
                        }`
                    }
                >
                    O'quvchi qo'shish
                </NavLink>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition-all ${isActive
                            ? "bg-white text-blue-600 dark:bg-gray-700 dark:text-yellow-400 font-bold shadow-md"
                            : "hover:bg-blue-500 dark:hover:bg-gray-700 text-gray-200 dark:text-gray-300"
                        }`
                    }
                >
                    Statistika
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
