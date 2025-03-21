import { useState, useEffect } from "react";
import AddStudent from "./AddStudents";
import Navbar from "./Navbar";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (name) => {
    if (!name.trim()) return;
    const newStudent = {
      id: students.length + 1,
      name,
      present: false,
    };
    setStudents([...students, newStudent]);
  };

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <Navbar students={students} />
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 mt-6">
        <AddStudent addStudent={addStudent} />
        <StudentList
          students={students}
          toggleAttendance={toggleAttendance}
          removeStudent={removeStudent}
        />
      </div>
    </div>
  );
}

export default App;
