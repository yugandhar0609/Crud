import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {
    // const apiUrl = 'http://localhost:9955'; 

    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:9955/getin")
        .then(res => setData(res.data.data))
        .catch(err => console.log(err));
    }, []);
  
    const handleDelete = (id) => {
      const confirmDelete = window.confirm("Do you want to delete?");
      if (confirmDelete) {
        axios.delete(`http://localhost:9955/delete/${id}`)
          .then(res => {
            alert("Record deleted");
            setData(prevData => prevData.filter(item => item._id !== id));
          })
          .catch(error => console.error('Error deleting data:', error));
      }
    };

  return (
    <div className='container mx-auto my-8'>
      <div className="flex flex-col items-start">
        <h1 className='font-bold uppercase'>CRUD Operation</h1>
        <Link to="/create">
          <button className='font-bold uppercase border-2 p-3 bg-green-600 text-white rounded-lg hover:bg-yellow-400'>
            Create
          </button>
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">DOJ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data && data.map((d, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{d.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{d.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{d.course}</td>
                <td className="px-6 py-4 whitespace-nowrap">{d.DOJ}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/update/${d._id}`}>
                    <button className="border-2 p-2 bg-blue-600 text-white rounded-lg">Edit</button>
                  </Link>
                  <button className="border-2 p-2 bg-red-600 text-white rounded-lg" onClick={() => handleDelete(d._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
