import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";


const Background = ({background}) =>{
  return (
    <div className="background" style={{ backgroundImage: `url(${background})`, backgroundSize : "cover", backgroundRepeat: "no-repeat" }}>
        {console.log(background)}
      <Jumbotron fluid style={{ backgroundImage: background}}>
        <Container className="title-container">
          <h1 className="background-title">
            Your local source of high quality images and videos directly from
            their creators
          </h1>
          <SearchBar/>
          <p className="background-paragraph">
            Recommended: summer, food, covid-19, real estate, love
          </p>
        </Container>
        {/* <p style={{ fontSize: "15px", marginBottom: "0px" }} className="photoOf">Photo of the day by john doe</p> */}
      </Jumbotron>
    </div>
  );
}

export default Background;
