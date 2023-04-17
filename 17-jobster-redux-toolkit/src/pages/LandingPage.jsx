import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const { isLoading } = useSelector(state => state.user);
  console.log(isLoading);
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby 8-bit jianbing activated charcoal poke keffiyeh authentic literally pork belly yes plz tonx
            cardigan butcher. Selfies fanny pack green juice vibecession
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
