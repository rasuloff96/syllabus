import React, { useState, useEffect } from "react";

const StatisticsPage = () => {
    const [attendanceStats, setAttendanceStats] = useState({});

    // LocalStorage'dan statistikani olish
    useEffect(() => {
        const storedStats = JSON.parse(localStorage.getItem("attendanceStats")) || {};
        setAttendanceStats(storedStats);
    }, []);

    return (
        <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📊 Davomat Statistikasi</h1>
            {Object.keys(attendanceStats).length === 0 ? (
                <p className="text-gray-700 dark:text-gray-300">Hali hech qanday statistika mavjud emas.</p>
            ) : (
                Object.entries(attendanceStats).map(([date, students]) => (
                    <div key={date} className="mb-6 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">{date}</h2>
                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                                    <th className="border p-2">Ism</th>
                                    <th className="border p-2">Sinf</th>
                                    <th className="border p-2">Davomat</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
                                        <td className="border p-2">{student.name}</td>
                                        <td className="border p-2">{student.className}</td>
                                        <td
                                            className={`border p-2 font-semibold ${student.attendance ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}
                                        >
                                            {student.attendance ? "Qatnashdi" : "Kelmagan"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            )}
        </div>
    );
};

export default StatisticsPage;
