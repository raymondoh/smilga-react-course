import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const RegisterPage = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // get submitted state values
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log("Please provide all fields");
      toast.error("please enter all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      setValues(initialState);
      return;
    }
    dispatch(registerUser({ name, email, password }));
    setValues(initialState);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/**name field */}
        {/**props: type, name, value, handleChange, labelText */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            id="name"
            value={values.name}
            handleChange={handleChange}
            autoComplete="true"
          />
        )}
        {/**email field */}
        {/**props: type, name, value, handleChange, labelText */}
        <FormRow
          type="email"
          name="email"
          id="email"
          value={values.email}
          handleChange={handleChange}
          autoComplete="true"
        />
        {/**password field */}
        {/**props: type, name, value, handleChange, labelText */}
        <FormRow
          type="password"
          name="password"
          id="password"
          value={values.password}
          handleChange={handleChange}
          autoComplete="true"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
