import { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import AddStudent from "../AddStudents/AddStudents.jsx";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", present: false },
    { id: 2, name: "Vali", present: true },
    { id: 3, name: "Olim", present: false },
  ]);

  const addStudent = (name) => {
    if (!name.trim()) return; // Bo‘sh ism kiritishni oldini olish
    const newStudent = { id: students.length + 1, name, present: false };
    setStudents([...students, newStudent]);
  };

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <Navbar students={students}/>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 mt-6">
        <AddStudent addStudent={addStudent} />
        <StudentList students={students} toggleAttendance={toggleAttendance} />
      </div>
    </div>
  );
}

export default App;
