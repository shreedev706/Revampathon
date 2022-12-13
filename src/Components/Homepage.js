import "../CSS/Homepage.css";
import newsimage from "../assets/mountain.png";
import logo from "../assets/etaja_logo.png";
import account from "../assets/user.png";
import polits from "../assets/politics.jpeg";
import sports from "../assets/sports.jpeg";
import valley from "../assets/valley.jpeg";
import science from "../assets/science.jpeg";
import Loginpopup from "./Popup/PopupLogin";
import nologin from "../assets/noadicon.png";
import { createContext, useContext, useEffect, useState } from "react";
import AdContext from "../store/noAddContext";
import magazine1 from "../assets/magazine1.jpg";
import magazine2 from "../assets/magazine2.jpg";
import magazine4 from "../assets/magazine4.jpg";
import magazine5 from "../assets/magazine5.jpg";
import magazine7 from "../assets/magazine7.jpg";
// import magazine8 from "../assets/magazine8.png"

function Homepage(props) {
  const [removeAd, setRemoveAd] = useState(false);

  const useAdContext = useContext(AdContext);
  return (
    <div
      className={useAdContext.blockAd ? "loginhome" : "home"}
      onClick={(e) => {
        e.stopPropagation();
        useAdContext.showad();
      }}
    >
      
      <div className="header">
        <img src={logo} className="logo"></img>
        <nav className="navbar">
          <ul>
            <li>गृह पृष्ठ</li>
            <li>समुदाय</li>
            <li>राशिफल</li>
            <li>खेल</li>
          </ul>
        </nav>
        <div className="rightside">
          <img src={account} className="account"></img>
          <div
            className="removeadd"
            onClick={() => {
              useAdContext.adblock();
            }}
          >
            <img src={nologin} className="noadd"></img>&nbsp;Remove Ads
          </div>
        </div>
      </div>
      <div class='mainsection'>
        <div class="content">
        <div class="passage">
          <p>Want to add new magazine article?</p>
        </div>
        <div class="start">
          <p>click here to start</p>
        </div>
        <div class="button">
          <button type="button" > Add Article</button>
        </div>
        </div>

      </div>

      <div className="insideHomepage">
        
        <div className="category">
          <div className="head">शीर्षक</div>
          <ul>
            <li>समाचार</li>
            <li>वित्त</li>
            <li>जीवनशैली</li>
            <li>मनोरञ्जन</li>
            <li>अन्तर्राष्ट्रिय</li>
            <li>प्रविधि</li>
            <li>स्वास्थ्य सेवा</li>
            <hr></hr>
            <li>प्रविधि</li>
            <li>स्वास्थ्य सेवा</li>
          </ul>
        </div>

        <div class="grid-container">

          <div class="grid-item">
            <img src={magazine1} alt="cat photo" />
            <p>Kitty</p>
          </div>
          <div class="grid-item">
            <img src={magazine2} alt="cat photo" />
            <p>Fluffy</p>
          </div>
          <div class="grid-item">
            <img src={magazine4} alt="cat photo" />
            <p>Socks</p>
          </div>
          <div class="grid-item">
            <img src={magazine5} alt="cat photo" />
            <p>Whiskers</p>
          </div>
          <div class="grid-item">
            <img src={magazine7} alt="cat photo" />
            <p>Mittens</p>
          </div>
          <div class="grid-item">
            <img src={magazine4} alt="magazine" />
            <p>The Dream</p>
          </div>
          <div class="grid-item">
            <img src={magazine4} alt="magazine" />
            <p>The Dream</p>
          </div>
          <div class="grid-item">
            <img src={magazine4} alt="magazine" />
            <p>The Dream</p>
          </div>


        </div>


        <div className="relatedNews">
          <div className="relatedheading">सम्बन्धित समाचार</div>
          <div className="related">
            <img src={sports} />
            <div>
              <div className="relatedcategory">खेल</div>
              <div className="relatedHeadline">
                एमबाप्पेविरुद्ध जोसिलो इंग्ल्यान्ड
              </div>
            </div>
          </div>
          <div className="related">
            <img src={valley} />
            <div>
              <div className="relatedcategory">उपत्यका</div>
              <div className="relatedHeadline">
                उपत्यकामा मेलम्चीको पानी तेस्रोपटक पुनः वितरण सुरू
              </div>
            </div>
          </div>
          <div className="related">
            <img src={science} />
            <div>
              <div className="relatedcategory">विज्ञान र प्रविधि</div>
              <div className="relatedHeadline">
                के हो ट्वीटर र एप्पलबीचको विवाद ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
