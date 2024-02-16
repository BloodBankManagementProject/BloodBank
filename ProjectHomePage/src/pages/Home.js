import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Bloodbank from "../images/new.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Bloodbank})` }}>
        <div className="headerContainer">
         <br/>
         <br/>
         
          <h1>Blood Bank</h1><h1>Website</h1>
        <br/>
        <h3>Your Health Is Our Priority</h3>
          <Link to="/login">
            <button>Login Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
