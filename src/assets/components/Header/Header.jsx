import {Header1, Logo, App1 ,MacCell} from './Header-Styled';
import macLogo from '../../logo.svg'
import App from '../../app.svg'
import Méqui from '../../cellmac.svg'



 function Header() {

  return (
    <>

     <Header1>  
     <Logo src={macLogo} alt="logo"/>
     
     <App1>
        <img src={App} alt="app"/>
        <a href='https://www.mcdonalds.com.br/apps'> Baixe o App</a>

     </App1>
     <MacCell >
     <a href='https://www.mcdonalds.com.br/pedidos'><button>Peça Seu Méqui <img src={Méqui}/></button></a>

     </MacCell>
     </Header1> 
    </>
  )
}

export default Header;