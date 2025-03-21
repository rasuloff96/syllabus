import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudentPage = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && className.trim()) {
      addStudent({ name, className, attendance: false });
      navigate("/");
    }
  };    

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Yangi o'quvchi qo'shish</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Sinf"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default AddStudentPage;
