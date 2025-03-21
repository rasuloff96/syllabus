import React, { useState } from "react";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !className) return;

    addStudent({ name, className });
    setName("");
    setClassName("");
    setIsOpen(false); // Modalni yopish
  };

  return (
    <div>
      {/* Modalni ochish tugmasi */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        O'quvchi qo'shish
      </button>

      {/* Modal oynasi */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Yangi o'quvchi qo'shish</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ism"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                placeholder="Sinf"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Qo'shish
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
