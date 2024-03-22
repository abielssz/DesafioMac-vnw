import {Footer1,Logo1,FooterApp,AppStore,PlayStore} from './Footer-Styled'
import macLogo from '../../logo.svg'
import appstore from '../../app_store.png'
import playstore from '../../play_store.png'

 function Footer() {
  return (
   <>
  
  <Footer1>
  <Logo1>
    <img src={macLogo} alt="logo"></img>
    <p>© McDonalds 2024</p> 
  </Logo1>
  
  <FooterApp>
    
  <a href='https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187'><AppStore src={appstore} alt="app" /> </a>

    <a href='https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&pli=1'><PlayStore src={playstore} alt="app"/></a>
     
  </FooterApp>

  </Footer1>

   </>

  )
}

export default Footer;
