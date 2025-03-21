import React from "react";
import StudentList from "../StudentList.jsx";

const AttendancePage = ({ students, markAttendance, deleteStudent, setSearchQuery, setSortOrder }) => {

    return (

        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
            <h1 className="text-2xl font-bold mb-4">📋 Davomat Sahifasi</h1>

            <input
                type="text"
                placeholder="🔎 O'quvchi nomi bo'yicha qidirish..."
                className="border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
                className="border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="default">📍 Saralash (Tanlang)</option>
                <option value="name">🔤 Ism bo'yicha</option>
                <option value="attendance">✅ Davomat bo'yicha</option>
            </select>

            <StudentList students={students} markAttendance={markAttendance} deleteStudent={deleteStudent} />
        </div>
    );
};

export default AttendancePage;
