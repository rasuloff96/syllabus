import AddStudent from "../AddStudents.jsx";

const AddStudentPage = ({ addStudent }) => {
    return (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4">O'quvchi qo'shish</h2>
            <AddStudent addStudent={addStudent} />
        </div>
    );
};

export default AddStudentPage;
