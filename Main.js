import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import Pagination from "./Pagination";
import "./Main.css";




const Main = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(()=>{
    fetch('https://reqres.in/api/users?page=2')
  .then(response=>response.json())
  .then(responseData=>{
      console.log(responseData.data)
    setUserIngredients(responseData.data)
  })
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userIngredients.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber =>{
    setCurrentPage(pageNumber);
  }
  return (
      <>
    <section className="ingredient-list">
        <Listing info={currentPosts}  />
    </section>
    <section>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={userIngredients.length}
        paginate={paginate}
      />
    </section>
    </>
  );
};

export default Main;
