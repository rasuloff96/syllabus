import React, { useState, useEffect } from "react";

const StatisticsPage = () => {
    const [attendanceStats, setAttendanceStats] = useState({});

    // LocalStorage'dan statistikani olish
    useEffect(() => {
        const storedStats = JSON.parse(localStorage.getItem("attendanceStats")) || {};
        setAttendanceStats(storedStats);
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Davomat Statistikasi</h1>
            {Object.keys(attendanceStats).length === 0 ? (
                <p>Hali hech qanday statistika mavjud emas.</p>
            ) : (
                Object.entries(attendanceStats).map(([date, students]) => (
                    <div key={date} className="mb-6 p-4 border rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-semibold mb-2">{date}</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2">Ism</th>
                                    <th className="border p-2">Sinf</th>
                                    <th className="border p-2">Davomat</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="text-center">
                                        <td className="border p-2">{student.name}</td>
                                        <td className="border p-2">{student.className}</td>
                                        <td
                                            className={`border p-2 ${student.attendance ? "text-green-500" : "text-red-500"
                                                }`}
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
