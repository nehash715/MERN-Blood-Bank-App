import React, { useEffect, useState } from "react";
import "./header.css";
import API from "../../../services/API";
//import API from 
const HeaderShimmer = () => {
  
  const [data, setData] = useState({});
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      //console.log("inshimmer",  data)
      setData(data.user)
  }
  catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    getUser();
  }, []);

  console.log( "user=", data)
 
  return (
    <>
      <nav className="navbar1">
        <div className="container-fluid">
          <div className="logo1"></div>
          <div className="h1-shimmer"> </div>

<div className="user1"></div>
          <div className="user"></div>
          <div className="shimmer-btn"></div>
        </div>
      </nav>
<div className="body1">
<div className="sidebar-shimmer">
  <div className="side-flex1">
       <div className="org1"></div><div className="org1-text"></div>
  </div>
<div className="side-flex">
  <div className="org1"></div><div className="org1-text"></div>
  </div>
  {/*data.role=="admin" || data.role=="organisation"?
  <div className="side-flex">
  <div className="org1"> </div><div className="org1-text"></div>
  </div>:<div></div>*/}



</div>
<div  className="menuss">
  <div  className="line"></div>
  <div className="line" ></div>
  <div className="line" ></div>
  <div className="line" ></div>
  <div className="line" ></div>
  <div className="line" ></div>
  <div className="line" ></div>
  <div className="line" ></div>
  <div className="line" ></div>
  
</div>

</div>
    </>
  );
};

export default HeaderShimmer;
