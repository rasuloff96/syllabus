import React from "react";

const StudentList = ({ students, markAttendance, deleteStudent }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {students.map((student) => (
        <div key={student.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2">
          <h2 className="text-xl font-bold">{student.name}</h2>
          <p className="text-gray-600">{student.className}</p>

          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-lg text-white ${
                student.attendance ? "bg-green-500" : "bg-gray-400"
              }`}
              onClick={() => markAttendance(student.id, true)}
            >
              Hozir
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-white ${
                !student.attendance ? "bg-red-500" : "bg-gray-400"
              }`}
              onClick={() => markAttendance(student.id, false)}
            >
              Yo'q
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-black text-white"
              onClick={() => deleteStudent(student.id)}
            >
              O'chirish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
