
import React, { useEffect } from "react";
import { jikanApiData } from "@/api/jikan";

function Home() {
  useEffect(() => {
    
    try{
      const data = jikanApiData();
    }
    catch(error){
      console.log(error)
    }
  }, []);
  console.log(import.meta.env["VITE_CONSUMET_API_URL"]);

  return <div>mkjynh</div>;
}

export default Home;
