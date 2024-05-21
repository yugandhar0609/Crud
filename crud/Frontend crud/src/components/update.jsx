import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    userName: "",
    age: "",
    course: "",
    DOJ: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the existing user data and populate the form
    axios.get(`http://localhost:9955/get/${id}`)
      .then(res => setInputData(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9955/update/${id}`, inputData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

 

  return (
    <div className="container mx-auto my-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">UserName:</span>
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
          <span className="text-gray-700">DOJ:</span>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
