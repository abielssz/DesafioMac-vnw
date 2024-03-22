import styled from 'styled-components'


 export const Header1 = styled.header`
 height: 70px;

display:flex;
align-items:center;
 padding: 10px;
 flex-wrap: wrap;
`

export const Logo = styled.img`

     margin-right:800px;
    height: 50px;
    width: 50px;
    margin-left: 20px;
    
`
export const App1 = styled.div`
flex-grow: 1;
display:flex;
align-items:center;
font-weight:bold;
color:black;
cursor:pointer;
a{
  font-family: sans-serif;
  color:black;
  text-decoration: none;
}
`
export const MacCell = styled.div`
margin-right: 40px;
display:flex; 
a{
text-decoration:none;}
button {
    padding: 7px;
    font-size: 14px;
    font-weight:bold;
    border:none;
    border-radius: 10px;
    display:flex; &:hover {
   
      background-color: #d43b3b;
    }
    a{
      
      color:black;
  text-decoration: none;
  
}
    cursor:pointer;
  align-items:center;
    background-color: #FFC72C;
}
`
