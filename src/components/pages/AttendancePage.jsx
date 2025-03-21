import StudentList from "../StudentList.jsx";

const AttendancePage = ({ students, toggleAttendance, removeStudent }) => {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Davomat ro'yxati</h2>
      <StudentList students={students} toggleAttendance={toggleAttendance} removeStudent={removeStudent} />
    </div>
  );
};

export default AttendancePage;
