import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export const Home = () => {

    const [books, setBooks] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("/books");
                console.log(res.data);
                setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBooks();
        console.log(books)
    }, [])


    const deleteBook = async (id) => {
        try {
            const res = await axios.delete("/delete", { data: { id } });
            console.log(res)
            alert("Deleted")
            // navigate("/");
            window.location.reload();

        } catch (error) {
            alert("Error ")
            console.log("Error : ", error);
        }
    }
    const updateBook = async (id) => {
        try {
            const res = await axios.put("/delete/" + id, { data: "data" });
            console.log(res)
            alert("Updated")
            // navigate("/");
            // window.location.reload();

        } catch (error) {
            alert("Error ")
            console.log("Error : ", error);
        }
    }



    return (
        <div className="home">
            <h1>Rudr Book Shop</h1>
            <div className="books">
                {books.length > 0 && books.map((book) => {
                    return (<div key={book.id} className="indiBook" >

                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.id}  : {book.title}</h2>
                        <p>{book.about}</p>
                        <p>{book.price}</p>
                        <button className="update" onClick={() => deleteBook(book.id)}>Delete</button>
                        <button className="delete" >
                            <Link to={"/updateBook/" + book.id} >
                                Update
                            </Link>
                        </button>
                        {/* <button className="delete" onClick={() => updateBook(book.id)}>Update</button> */}
                    </div>)

                })}
            </div>


            <Link to="/createBook">
                <button className="addButton">
                    Add a book
                </button>
            </Link>
        </div>
    )
}
