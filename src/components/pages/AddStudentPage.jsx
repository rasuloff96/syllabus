import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudentPage = ({ addStudent }) => {
    const [name, setName] = useState("");
    const [className, setClassName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && className.trim()) {
            addStudent({ name, className, attendance: false });
            navigate("/");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
                    O'quvchi qo'shish
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Ism
                        </label>
                        <input
                            type="text"
                            placeholder="O'quvchi ismi"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Sinf
                        </label>
                        <input
                            type="text"
                            placeholder="Sinf (masalan, 10-A)"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
                    >
                        Qo'shish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddStudentPage;
