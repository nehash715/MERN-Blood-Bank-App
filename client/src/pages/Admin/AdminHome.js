import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            
          Welcome to the Blood Bank Management System, designed to empower administrators with a comprehensive and user-friendly platform for efficient blood bank management. Our Admin Interface is tailored to streamline the
           administrative tasks associated with overseeing a blood bank, ensuring a seamless and organized process.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
