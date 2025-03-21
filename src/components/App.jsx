const StudentList = ({ students, toggleAttendance, removeStudent }) => {
  return (
    <div className="space-y-3">
      {students.length === 0 ? (
        <p className="text-center text-gray-500">Hozircha o'quvchilar yo'q.</p>
      ) : (
        students.map((student) => (
          <div
            key={student.id}
            className={`flex justify-between items-center p-3 border rounded-lg shadow-md ${student.present ? "bg-green-100" : "bg-red-100"
              }`}
          >
            <span className="text-lg font-medium">{student.name}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`px-3 py-1 rounded-md text-white transition duration-200 ${student.present
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
                  }`}
              >
                {student.present ? "Bor" : "Yo'q"}
              </button>
              <button
                onClick={() => removeStudent(student.id)}
                className="px-3 py-1 rounded-md bg-gray-500 hover:bg-gray-700 text-white transition duration-200"
              >
                ❌
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;
