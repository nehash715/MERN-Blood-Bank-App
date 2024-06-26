import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";
import { toast } from 'react-toastify';
import ConfirmationModal from "./ConfirmationModal";
const DonarList = () => {
  const [data, setData] = useState([]);
  const [selectedDonorId, setSelectedDonorId] = useState(null);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/admin/donar-list");
      //   console.log(data);
      if (data?.success) {
        setData(data?.donarData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  //DELETE FUNCTION
  const handelDelete = async (id) => {
    setSelectedDonorId(id); // Store the selected hospital ID
  };

  const handleConfirmDelete = async () => {
    try {
      const { data } = await API.delete(`/admin/delete-donar/${selectedDonorId}`);
      toast.success(data?.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelDelete = () => {
    setSelectedDonorId(null); // Clear the selected hospital ID
  };


  return (
    <Layout>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organisationName + " (ORG)"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handelDelete(record._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDonorId && (
        <ConfirmationModal
          message="Are you sure you want to delete this Donor?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </Layout>
  );
};

export default DonarList;
