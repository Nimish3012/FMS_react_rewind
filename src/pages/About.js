import { Outlet } from "react-router";
import Profile from "./Profile";  //8.1 b
import ProfileCBC from"./ProfileCBC";

const About = () => {
  return (
    <>
      <div>
        <h1>About Us Page</h1>
        <h4>This page is a test page for Routing</h4>
        <h5>Below is a comparision for CBC and FC</h5>
      </div>
      <ProfileCBC name="class" id="1"/>
      {/* 8.1 a->  we can either use Outlet here or b-> directly render <Profile/> as well */}
      <Profile name="function" id="2"/>
      {/* 8.1 b-> redering the Profle directy*/}
    </>
  );
};

export default About;
