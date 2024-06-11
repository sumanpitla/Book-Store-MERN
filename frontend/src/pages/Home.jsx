import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-indigo-800">Book Store</h1>
      <div className="flex justify-center items-center gap-x-4 my-4">
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${showType === "table" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white"}`}
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${showType === "card" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white"}`}
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>
      <div className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-bold text-indigo-700">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-indigo-800 text-4xl hover:text-indigo-500 transition duration-300" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
