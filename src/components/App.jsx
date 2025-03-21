import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import AddStudentPage from "./pages/AddStudentPage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";

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
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<AttendancePage students={students} toggleAttendance={toggleAttendance} removeStudent={removeStudent} />} />
          <Route path="/add-student" element={<AddStudentPage addStudent={addStudent} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
