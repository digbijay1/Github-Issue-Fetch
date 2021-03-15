import React, { useEffect, useState } from "react";

function FetchApi() {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getIssues = async () => {
    const response = await fetch(
      "https://api.github.com/search/issues?q={facebook}&per_page=100&page_number=1"
    );

    const data = await response.json();
    const { items } = data;

    // setUser(items);
    // setLoaded(true);
    console.log(data)
      console.log(data.items)
  };

  useEffect(() => {
    getIssues();
  });
  return (
    <div>
      {/* {user.items.map((value)=>{
              return <li>{value.title}</li>
          })} */}

      {/* {!loaded ? (
        <h2>Loading .....</h2>
      ) : (
        <>
          {user.map((value) => {
            return <li>{value.title}</li>;
          })}
        </>
      )} */}
    </div>
  );
}

export default FetchApi;
