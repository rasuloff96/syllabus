import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">📚 Davomat tizimi</h1>
            <div className="flex gap-4">
                <Link to="/" className="hover:underline">Davomat</Link>
                <Link to="/add-student" className="hover:underline">O'quvchi qo'shish</Link>
            </div>
        </nav>
    );
};

export default Navbar;
