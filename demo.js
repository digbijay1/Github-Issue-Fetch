import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"
function FetchApi() {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [pageNumber,setPageNumber]=useState(0)
  const usersPerPage=10;
  const pagesVisited=pageNumber*usersPerPage;


  const displayUsers = user.slice(pagesVisited,pagesVisited+usersPerPage).map((value) => {
    return <li>{value.title}</li>;
  })
  

  const getIssues = async () => {
    const response = await fetch(
      "https://api.github.com/search/issues?q={facebook}&per_page=100&page_number=1"
    );

    const data = await response.json();
    

    setUser(data.items);
    setLoaded(true);
    // console.log(data)
    //   console.log(data.items)
  };

  useEffect(() => {
    getIssues();
  },[]);
  return (
    <div>
      {/* {user.items.map((value)=>{
              return <li>{value.title}</li>
          })} */}

      {!loaded ? (
        <h2>Loading .....</h2>
      ) : (
        // <>
        //   {user.map((value) => {
        //     return <li>{value.title}</li>;
        //   })}
        // </>
        displayUsers
      )}
      
    </div>
  );
}

export default FetchApi;
