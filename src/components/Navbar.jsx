const Navbar = ({ students }) => {
    const presentCount = students.filter((student) => student.present).length;
    const totalCount = students.length;

    return (
        <nav className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">📚 Davomat tizimi</h1>
            <span className="text-lg font-medium">
                Davomat: {presentCount} / {totalCount}
            </span>
        </nav>
    );
};

export default Navbar;
