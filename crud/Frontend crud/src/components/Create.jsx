import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {


  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    userName: "",
    age: "",
    course: "",
    DOJ: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9955/post", inputData);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="container mx-auto my-8 bg-blue-400 p-3">Form Data</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">User Name:</span>
          <input
            type="text"
            value={inputData.userName}
            name="userName"
            onChange={handleChange}
            className="form-input mt-1 block w-full border border-black rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Age:</span>
          <input
            type="number"
            value={inputData.age}
            name="age"
            onChange={handleChange}
            className="form-input mt-1 block w-full border border-black rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Course:</span>
          <input
            type="text"
            value={inputData.course}
            name="course"
            onChange={handleChange}
            className="form-input mt-1 block w-full border border-black rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Date of Joining:</span>
          <input
            type="date"
            value={inputData.DOJ}
            name="DOJ"
            onChange={handleChange}
            className="form-input mt-1 block w-full border border-black rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
