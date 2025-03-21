import { useState } from "react";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !className.trim()) return;

    const newStudent = {
      name,
      className,
      attendance: false, // Yangi o'quvchi avtomatik ravishda davomat olinmagan holatda bo'ladi
    };

    addStudent(newStudent);
    setName("");
    setClassName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="O'quvchi ismi"
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        placeholder="Sinf nomi (masalan, 10-A)"
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Qo'shish
      </button>
    </form>
  );
};

export default AddStudent;
