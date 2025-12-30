import React, { useState } from "react";
import { useEffect } from "react";
import img1 from "../../assets/img1.jpeg";

function Github() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/NextGenFarhan")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="bg-gray-900 p-5 text-center text-white text-3xl m-7 p-4 rounded-lg">
      <div className="flex flex-row justify-center text-center gap-40">
        <img src={img1} alt="git Picture" width={300} height={200}/>
        <div 
        class="flex flex-col justify-center text-center"
        >
          <h1>Name : {data.name}</h1>
          <h1>location : {data.location}</h1>
          <h2>followers : {data.followers}</h2>
        </div>
      </div>
    </div>
  );
}

export default Github;