import React from "react";

const StudentList = ({ students, markAttendance, deleteStudent }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.length > 0 ? (
        students.map((student) => (
          <div
            key={student.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 transition"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {student.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">📌 Sinf: {student.className}</p>

            <div className="mt-3 flex justify-between">
              <button
                onClick={() => markAttendance(student.id)}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  student.attendance
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                {student.attendance ? "✅ Hozir" : "❌ Yo'q"}
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
              >
                🗑 O'chirish
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center w-full col-span-3">
          🛑 Hozircha o'quvchilar mavjud emas.
        </p>
      )}
    </div>
  );
};

export default StudentList;
