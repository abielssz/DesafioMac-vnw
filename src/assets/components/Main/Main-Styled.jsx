import styled from 'styled-components'

export const Main1 = styled.section`
    background-color: #FFC72C;
    height: 25em;
    display: flex;
    justify-content: center;
    align-items:center;
  
    img {
        height: 250px;
        width: 250px;
    }
`
 export const State = styled.div `
    font-family: sans-serif;

font-weight: 800;
line-height: 60.51px;
text-align: left;

    width: 100%;;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    h2 {color:white;

        font-size: 50px;
        span {
            color:#DB0007;
        }
    }
 `
 export const SelectProduct = styled.div`
 height: 10em;
     display:flex;
     justify-content:center;
     align-items:center;
     gap:50px;
     background-color: #FFC72C;
     cursor:pointer;
         

     img {
        width:100px;
        height: 100px;
     }
 
 `
export const MoreContent = styled.div`
    background-color: #FEB706;
    padding: 40px;
    text-align: center;
    h1{
        font-family: sans-serif;
text-align: center;
        color:white;
    }

`
export const CardS = styled.div`
display:flex;
justify-content:center;
padding: 20px;
margin-top: 50px;
justify-content:space-evenly;
flex-wrap:wrap;
   
`

export const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
  background-color:white;
  height:18em;
  border-radius: 20px;
  font-weight: bold;
  font-family: sans-serif;
  button {
    font-weight: bold;
  font-family: sans-serif;
    width: 100%;
    padding: 13px;;
    text-align:center;
    background-color:#FFBC0D;
    border:none;
    cursor:pointer;
    border-radius: 10px;
    &:hover {
        color:white;
      background-color: #d43b3b;
  }}

`