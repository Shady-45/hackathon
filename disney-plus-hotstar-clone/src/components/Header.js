import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";
import styled from "styled-components";

const Header = () => {
  const [file, setFile] = useState();
  let [open, setOpen] = useState(true);
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  /* 
  open ? <Drop /> : () => console.log("NUll"); */

  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="/images/logo.png" alt="disney" />
        </Link>
      </Logo>
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINAL</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIE</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Link to="/signin">
        <SignIn>
          <DropDown>
            <button class="login-with-google-btn" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </DropDown>
        </SignIn>
      </Link>

      <Drop>
        <ul id="drop">
          <li>Sign in for creators</li>
          <li>Sign in for Users</li>
        </ul>
      </Drop>

      <SignOut>
        <DropDown>
          <span>SIGN OUT</span>
        </DropDown>
      </SignOut>
      <Forms>
        <form>
          <input type="file" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>
      </Forms>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090913;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 1.6px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 50px;
  max-height: 70px;
  margin-top: 4px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      text-transform: uppercase;
      line-height: 1.08;
      letter-spacing: 1.42;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

        &:before{
            content:"";
            background-color:rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            height:2px;
            left:0px;
            width:auto;
            position: :absolute;
            right: 0px;
            transform-origin: left center;
            opacity:0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            visibility: hidden;
            width:auto;
            transform: scaleX(0);
        }
        :hover{
            text-decoration:underline;
        }
    }

    &:hover{
        span:before{
            visibility:visible;
            opacity:1 !important;
        }
    }
  }
`;
const SignOut = styled.div``;
const SignIn = styled.div`
  margin-right: 10px;
`;
const DropDown = styled.div``;
const Drop = styled.div`
  ul {
    flex-direction: column;
    border: 2px solid gray;
    width: 100%;

    text-align: center;
    color: white;
    align-items: center;
    background-color: black;
    padding: 0.4rem;

    height: 10vh;
    margin-top: 7rem;
  }
  li {
    list-style: none;
    padding: 0.2rem;
  }
`;
const Drop1 = styled.div`
  display: hidden;
`;
const Forms = styled.div``;
