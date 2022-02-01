import React from "react";
import { useSelector } from "react-redux";
import HomeBox from "../../components/HomeBox/HomeBox";
import "./Home.scss";

const Home = () => {
  let posts = useSelector((state) => state.posts);
  return (
    <HomeBox>
 
    </HomeBox>
  );
};

export default Home;
