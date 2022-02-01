import React from "react";
import "./Profile.scss";
import HomeBox from "../../components/HomeBox/HomeBox";
import { Igtv, Posts, Saved, Tagged } from "../../components/icons";
import { useParams } from "react-router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faImages , faPlayCircle ,faPauseCircle,faPhotoVideo } from  "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  let { id } = useParams();
  const [userImage, setUserImage] = React.useState();
  React.useEffect(() => {
    if (id === "maha") {
      //my profile photo
      setUserImage("http://cdn.onlinewebfonts.com/svg/img_312847.png");
    } else {
      //random profilPhoto
      setUserImage("http://cdn.onlinewebfonts.com/svg/img_312847.png");
    }
  }, [id]);
  return (
    <HomeBox>
    <div className="profile">
      <header className="profileHeaderRow">
        <div className="profilePhotoCol">
          <img src={userImage} alt="profile" />
        </div>
        <div className="profileContentCol">
          <div className="title">
            <div className="username">
              <span>maha</span>
            </div>
       
          </div>
          <div className="counter">
       
            <div>
              <h5>150</h5>
              followers
            </div>
            <div>
              <h5>200</h5>following
            </div>
          </div>
      
        </div>
      </header>
      <div className="profileTabs">
              <span>13,676 Total posts ____________________________</span>
            </div>
      <div className="profileTabs">
        <div className="tabItem active">
        <h5 id="numbers">455</h5>
<div>
<span>Image </span>
         <FontAwesomeIcon id="icon" icon={faImages}></FontAwesomeIcon>

</div>
   
        </div>
        <div className="tabItem">
        <h5 id="numbers">455</h5>
<div>
          <span>videos</span>
          <FontAwesomeIcon id="icon" icon={faPlayCircle}></FontAwesomeIcon>
</div>
        </div>
        <div className="tabItem">
        <h5 id="numbers">455</h5>
<div>
         <span>Carousel</span>
         <FontAwesomeIcon id="icon" icon={faPhotoVideo}></FontAwesomeIcon>

         </div>
        </div>
        <div className="tabItem">
          <h5 id="numbers">455</h5>
          <div>
          <span>Reelse</span>
          <FontAwesomeIcon id="icon" icon={faPauseCircle}></FontAwesomeIcon>
          
          </div>
          
        </div>
        <div className="tabItem">
        <h5 id="numbers">455</h5>
<div>   <span id="IGTV">IGTV</span>
          <Igtv /></div>
       

        </div>
      
   
     
      </div>
      <div className="profilePosts">
     
      </div>
      <div class="engg">
        <h5 className="h55">3.5% Engg rate
</h5>
    </div>
    </div>

  </HomeBox>
);
};

export default Profile;