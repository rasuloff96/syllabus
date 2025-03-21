import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import StudentList from "./StudentList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudentPage from "./pages/AddStudentPage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", className: "10-A", attendance: false },
    { id: 2, name: "Zarina", className: "11-B", attendance: false },
    { id: 3, name: "Bek", className: "9-C", attendance: false },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // **Davomatni belgilash**
  const markAttendance = (id, status) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, attendance: status } : student
      )
    );
  };

  // **O'quvchini o'chirish**
  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // **O'quvchi qo'shish**
  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, { id: Date.now(), ...newStudent }]);
  };

  // **Qidirish**
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // **Saralash**
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "attendance") {
      return b.attendance - a.attendance;
    }
    return 0;
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AttendancePage
              students={sortedStudents}
              markAttendance={markAttendance}
              deleteStudent={deleteStudent}
              setSearchQuery={setSearchQuery}
              setSortOrder={setSortOrder}
            />
          }
        />
        <Route path="/add-student" element={<AddStudentPage addStudent={addStudent} />} />
      </Routes>
    </Router>
  );
};

export default App;
