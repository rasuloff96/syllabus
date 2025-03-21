import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudentPage from "./pages/AddStudentPage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx"; // ✅ Yangi sahifa

const App = () => {


  const getStoredStudents = () => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  };

  const [students, setStudents] = useState(getStoredStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const markAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, attendance: !student.attendance } : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, { id: Date.now(), ...newStudent }]);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Route path="/statistics" element={<StatisticsPage students={students} />} />
      </Routes>
    </Router>
  );
};

export default App;
