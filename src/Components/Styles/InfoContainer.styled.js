import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: white;
  margin: 0 auto;
  margin-top: 22px;
  padding: 25px 0;
  width: 1000px;
  max-width: 90%;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 12px;
  display: flex;
  align-content: stretch;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  position: relative;
  z-index: 999;

  @media only screen and (max-width:375px) {
    flex-direction:column;
    padding: 10px;
    /* max-height: 200px; */
  }

  /* hr{
    width: 1px;
    size: 500;
  } */
`

export const InfoCard = styled.div`
  padding-left: 25px;
  width: 25%;
  word-wrap: break-word;
  padding-right: 10px;
  border-left: ${(props) => props.active};

  @media only screen and (max-width:375px) {
    text-align: center;
    border-left: none;
    width: 95%;
    padding: 0;
    margin: 8px 0;
  }
`
export const CardTitle = styled.p`
  font-size: 0.58rem;
  color: hsl(0,0%,59%);
  font-weight: 700;
  margin-bottom: 10px;

  @media only screen and (max-width:375px) {
    margin-bottom: 6px;
  }
`

export const CardBody = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
`