import React, { useState } from "react";
import './App.css';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./Components/main";
import Test from "./Components/Test";
import Doc from "./Components/Doc";

const GlobalStyled = createGlobalStyle`
  ${reset};
  ul {
    display: flex;
    background-color: gray;
    height: 100px;
    width: 1000px;
    justify-content: space-around;
  }
`;

const NavBar = styled.nav`
  display: flex;
  background-color: pink;
`;

const Contents = ({ liName }) => {
  if (liName ==="doc") {
    return <Doc />;
  } else {
    return <Test />;
  }
}

function App() {
  const [liName, setLiName] = useState("doc");
  const checkId = (e) => {
    setLiName(e.target.id);
  }
  return (
    <>
      <GlobalStyled />
      <NavBar>
        <ul>
          <li id="doc" 
            style={
              liName === "doc" ? { color: "red" } : { color: "pink" }
            }
            onClick={checkId}>문서</li>
          <li id="exec" onClick={checkId}>자습서</li>
          <li id="blog" onClick={checkId}>블로그</li>
          <li id="comm" onClick={checkId}>커뮤니티</li>
        </ul>
      </NavBar>
      <Contents liName={liName}/>
      {/* <Main /> */}
    </>
  );
}

export default App;
