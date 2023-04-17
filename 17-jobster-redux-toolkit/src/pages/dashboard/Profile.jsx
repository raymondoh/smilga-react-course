import React, { useState } from "react";
import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { user, isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    const { name, lastName, email, location } = userData;
    if (!name || !lastName || !email || !location) {
      toast.error("Please fill out all fields");
      return;
    }

    dispatch(updateUser(userData));
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="name"
            id="name"
            value={userData.name}
            handleChange={handleChange}
            autoComplete="true"
            labelText="Name"
          />
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="lastName"
            id="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            autoComplete="true"
            labelText="Last Name"
          />
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="email"
            name="email"
            id="email"
            value={userData.email}
            handleChange={handleChange}
            autoComplete="true"
            labelText="Email"
          />
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="location"
            id="location"
            value={userData.location}
            handleChange={handleChange}
            autoComplete="true"
            labelText="Location"
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
