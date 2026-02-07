"use client";
import React, { use } from "react";
import { useState } from "react";

const FormSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending data", formData);

    const res = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      });
    console.log(response);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Form Submit Example</h1>
      <form className="space-y-4 w-1/2 mx-auto border-2 border-gray-300 p-4 rounded ">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded"
            placeholder="enter name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            className="border border-gray-300 p-2 rounded"
            placeholder="enter email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            className="border border-gray-300 p-2 rounded"
            placeholder="enter message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSubmit;
