import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">📚 Davomat tizimi</h1>
            <div className="flex gap-4">
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
            </div>
        </nav>
    );
};

export default Navbar;
