import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState({});
  const [name,setName]=useState("")
  console.log(user)
  //find org records
  /*const getOrg = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      //console.log("inshimmer",  data)
      setData(data.user)
  }
  catch (error) {
    console.log(error);
  }*/
   /* try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-orgnaisation");
          console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-orgnaisation-for-hospital"
        );
          console.log(data);
        if (data?.success) {
          setData(data.organisations)
         
        }
      }
    } catch (error) {
      console.log(error);
    }*/


  

  useEffect(() => {
    //getOrg();
  }, [user]);

  return (
 

    <Layout>
      {user.role=="hospital"?<>
      <h1 style={{textAlign:'center',fontStyle: 'italic',textDecoration: 'underline'}}>{user.hospitalName}</h1>
      <br></br> 
      <span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}} >{user.hospitalName} is a hospital entity registered in the system. As a hospital, it plays a crucial role in the blood management system, facilitating both blood donation and distribution.</span>
     <br></br> <br></br> <span> <span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}}>1.Blood Donation:</span> <span style={{fontSize: '1.1rem'}}> {user.hospitalName}  hospital can accept blood donations from donors.</span></span>
     <br></br><br></br> <span><span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}}> 2.Blood Distribution:</span> <span style={{fontSize: '1.1rem'}}>{user.hospitalName} hospital can distribute blood to patients in need.</span></span>
     <br></br><br></br> <span> <span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}}> 3.Analytics:</span><span style={{fontSize: '1.1rem'}}>  {user.hospitalName}  hospital has access to analytics to view all blood details. This allows {user.hospitalName} hospital to make informed decisions regarding blood management and distribution.</span></span>
      </>
      
      :<>
      
      <h1 style={{textAlign:'center',fontStyle: 'italic',textDecoration: 'underline'}}>{user.name}</h1>
      <br></br> 
      <span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}} >{user.name} is an individual registered in the system with the role of a donor. As a donor, their primary function is to contribute blood to the blood management system for the benefit of patients in need.</span>
     <br></br> <br></br> <span> <span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}}>1.Blood Donation:</span> <span style={{fontSize: '1.1rem'}}> {user.name}  can donate blood to hospitals and organizations registered in the system.</span></span>
     <br></br><br></br> <span><span style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.5',textDecoration: 'underline',fontWeight:'bold'}}> 2.No Blood Distribution:</span> <span style={{fontSize: '1.1rem'}}>{user.name} does not have the capability to take out blood from the system.</span></span>
    

      </>
      }
      
     {/* <table className="table ">
        <thead>
          <tr>
           
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
            
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
          </table>*/}
      


    </Layout>
  );
};

export default OrganisationPage;
