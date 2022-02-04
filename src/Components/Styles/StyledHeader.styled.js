import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 200px;
  width: 100%;
  background-color: blue;
  background-image: url(${(props)=>props.img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 9999;

  @media only screen and (max-width:375px) {
    height: 250px;
  }

  h2{
    color: white;
    padding: 22px 0;
    margin: 0 20px;
    font-weight: 700;
    font-size: 1.4rem;
  }
`
export const StyledInput = styled.form`
  display: flex;
  width: 500px;
  max-width: 90%;
  margin: 0 auto;
  position: relative;

  input{
    /* margin: 0 20px; */
    width: 100%;
    padding: 14px 20px;
    border-radius: 12px;
    border: none;
    font-size: 16px;

    &:focus{
      outline: none;
    }

    &:hover{
      cursor: pointer;
    }
  }
  button{
    background: none;
    border: none;
    border-radius: 0 12px 12px 0;
    /* width: 50px; */
    background-color: hsl(0,0%,17%);
    position: absolute;
    right: 0;
    padding: 14px 18px;
    /* height: 45px; */

    &:hover{
      cursor: pointer;
    }
  }
`