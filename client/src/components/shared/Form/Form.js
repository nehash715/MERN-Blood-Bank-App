/*import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName,
              website
            );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>
      
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"fororganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registerd yet ? Register
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              ALready Usser Please
              <Link to="/login"> Login !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;*/





//my code
import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
 
  const [role, setRole] = useState("donar");
  
  const [error, setErrors] = useState({});
  const [formData, setFormData] = useState({});

///starting of new code
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleValidate(e);
  }


 const isValid=(errors)=>{
    //errors would have keys with non empty string as value
    //console.log(errors)
    let keys=Object.keys(errors)//keys in array
//console.log("keys",keys)
   let count= keys.reduce((acc,curr)=>{
        return errors[curr]?acc+1:acc
    },0)
    //console.log("count", count)
    return count===0;
  }
 const validateAll=()=>{
    let {name,email,password,address,website,organisationName,hospitalName,phone}=formData;
    let errors={}
     
    if(formType === "login"){
      errors.email=validateEmail(email)
    errors.password=validatePassword(password)
    }

else if(formType==="register"){
    errors.email=validateEmail(email)
    errors.password=validatePassword(password)
    errors.address=validateAddress(address)
    errors.website=validateWebsite(website)
    if(role === "admin" || role === "donar"){
      errors.name=validateName(name)
    }
    else if(role=="organisation")
    {
      errors.organisationName=validateOrganisation(organisationName)
    }
    else if(role=="hospital"){
    errors.hospitalName=validatehospital(hospitalName)
    }
    errors.phone=validatePhone(phone)
  }
    return errors
  }



  const handleValidate = (e) => {
    const { name, value } = e.target;
    let newError = { ...error };
    switch (name) {
      case "email":
        newError.email = validateEmail(value);
        break;
      case "password":
        newError.password = validatePassword(value);
        break;
      case "name":
        newError.name = validateName(value);
        break;
      case "organisationName":
        newError.organisationName = validateOrganisation(value);
        break;
      case "hospitalName":
        newError.hospitalName = validatehospital(value);
        break;
      case "website":
        newError.website = validateWebsite(value);
        break;
      case "address":
        newError.address = validateAddress(value);
        break;
      case "phone":
        newError.phone = validatePhone(value);
        break;
      default:
        break;
    }
    setErrors(newError);
  };
 const  validatePhone=(phone)=>{
  if (!phone) {
    return "Phone is mandatory";
  }
  
  // Check if the phone number contains only digits
  if (!/^\d+$/.test(phone)) {
    return "Phone number should contain only digits";
  }

  // Check if the phone number has exactly 10 digits
  if (phone.length !== 10) {
    return "Phone number should be 10 digits long";
  }

  // Return an empty string if the phone number is valid
  return "";
 }
 
 const  validateEmail=(email)=>{
  return !email?"Email is mandatory":!email.includes('@')?"Enter valid Email":""
}

const  validatePassword=(password)=>{
  return !password?"Password is mandatory":""
}

 const  validateName=(name)=>{
return !name?"Name is mandatory":""
}

const  validateOrganisation=(organisation)=>{
return !organisation?"Organisation Name is mandatory":""
}
 const  validateWebsite=(website)=>{
  return !website?"Website is mandatory":""
}
 const  validatehospital=(hospital)=>{
return !hospital?"Hospital Name is mandatory":""
}
const  validateAddress=(address)=>{
return !address?"Address is mandatory":""

}


const isFormValid=()=>{
  let errors=validateAll();
 

  return !isValid(errors)
}
////ending 
  const handleFormSubmit = (e) => {
    //console.log("in submit",formData)
    
    e.preventDefault();
    const errors = validateAll();
    //console.log("AllValidate",errors)
//console.log( "valid/not",  isValid(errors))

    if (isValid(errors)) {
      //console.log("valid")
      
      
      if (formType === "login") {
        console.log("IN  login")
        //handleLogin(e, email, password, role);
        handleLogin({e,role,...formData})
      } else if (formType === "register") {
        let b={e,role,...formData}
        //console.log(b)
        handleRegister({e,role,...formData});
      }
    } else {
      setErrors(errors);
    }

    
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
        {/*  <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
  </div>*/}
        </div>
      
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"text"}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    error={error.email}
                    onBlur={handleValidate}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                    error={error.password}
                    onBlur={handleValidate}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={formData.name}
                      onChange={handleChange}
                      error={error.name}
                      onBlur={handleValidate}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"fororganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={formData.organisationName}
                      onChange={handleChange}
                      onBlur={handleValidate}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={formData.hospitalName}
                      onChange={handleChange}
                      onBlur={handleValidate}
                    />
                  )}

                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    error={error.email}
                    onBlur={handleValidate}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                    error={error.password}
                    onBlur={handleValidate}
                  />
                  <InputType
                    labelText={"website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={formData.website}
                    onChange={handleChange}
                    error={error.website}
                    onBlur={handleValidate}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={formData.address}
                    onChange={handleChange}
                    error={error.address}
                    onBlur={handleValidate}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={formData.phone}
                    onChange={handleChange}
                    error={error.phone}
                    onBlur={handleValidate}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registerd yet ? Register
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              ALready Usser Please
              <Link to="/login"> Login !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit"  disabled={isFormValid()}  >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
