import axios from 'axios';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const UpdateBook = () => {

  const [newBook, setNewBook] = useState({
    title: "",
    cover: "",
    about: "",
    price: null,
  });

  //Getting the id from the params
  const location = useLocation();
  const idFromParam = location.pathname.split('/')[2]
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBook((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    console.log(newBook)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/updateBook/ + ${idFromParam}`, newBook)
      console.log(res)
      navigate("/");
    } catch (error) {
      console.log("ERROR", error)
    }
    console.log("UPDATED")
  }
  return (
    <div>
      <h2>Update the  Book with id : {idFromParam}</h2>
      <form onSubmit={handleSubmit} className='input-form'>
        <input placeholder='cover' type='text' name="cover" onChange={(e) => handleChange(e)} />
        <input placeholder='title' type='text' name="title" onChange={(e) => handleChange(e)} />
        <input placeholder='about' type='text' name="about" onChange={(e) => handleChange(e)} />
        <input placeholder='price' type='number' name="price" onChange={(e) => handleChange(e)} />

        <button type='submit'>Update Book</button>
      </form>
    </div>
  )
}
