import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {auth} from "../firebase";
export const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
    
      const history = useHistory();
    
      const { name, email, password, error, loading } = data;


  return (
    <section>
      <h3>Create An Account</h3>
      <form className="form"  >
        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"   />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
             
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
          
          />
        </div>
        <p className="error"> </p>  
        <div className="btn_container">
          <button className="btn">
             
          </button>
        </div>
      </form>
    </section>
  )
}

export default Register