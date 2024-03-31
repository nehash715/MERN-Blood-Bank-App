import React,{useEffect} from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import {toast} from "react-toastify"
const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  console.log(error)
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);
  return (
    <>
      {/*error && <span>{toast.error(error, {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})
}</span>*/}
      {/*loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner ">
            <img src="./assets/images/banner2.jpg" alt="registerImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )*/}
              <div className="row g-0">
          <div className="col-md-8 form-banner ">
            <img src="./assets/images/banner2.jpg" alt="registerImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
    </>
  );
};

export default Register;
