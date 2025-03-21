import React from "react";
import StudentList from "../StudentList.jsx";

const AttendancePage = ({ students, markAttendance, deleteStudent, setSearchQuery, setSortOrder }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Davomat Sahifasi</h1>

      {/* 🔍 Qidirish Inputi */}
      <input
        type="text"
        placeholder="O'quvchi nomi bo'yicha qidirish..."
        className="border rounded-lg px-4 py-2 mb-4 w-full"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* 📌 Saralash */}
      <select
        className="border rounded-lg px-4 py-2 mb-4 w-full"
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Saralash (Tanlang)</option>
        <option value="name">Ism bo'yicha</option>
        <option value="attendance">Davomat bo'yicha</option>
      </select>

      {/* 👨‍🎓 O'quvchilar ro'yxati */}
      <StudentList students={students} markAttendance={markAttendance} deleteStudent={deleteStudent} />
    </div>
  );
};

export default AttendancePage;
