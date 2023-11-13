import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CreateBook = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    cover: "",
    about: "",
    price: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBook((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    console.log(newBook)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newBook.title == "" || newBook.cover == "" || newBook.price == null || newBook.about == "") return alert("Enter all fields")

    try {
      const res = await axios.post("/createBook", newBook)
      console.log(res)
      navigate("/");
    } catch (error) {
      console.log("ERROR", error)
    }
    console.log("Submit")
  }
  return (
    <div>
      <h2>Add A New Book</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='cover' type='text' name="cover" onChange={(e) => handleChange(e)} />
        <input placeholder='title' type='text' name="title" onChange={(e) => handleChange(e)} />
        <input placeholder='about' type='text' name="about" onChange={(e) => handleChange(e)} />
        <input placeholder='price' type='number' name="price" onChange={(e) => handleChange(e)} />

        <button type='submit'>Add new Book</button>
      </form>
    </div>
  )
}
