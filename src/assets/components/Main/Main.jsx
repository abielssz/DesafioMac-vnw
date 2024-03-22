import {Main1,State,SelectProduct, MoreContent,Card, CardS} from './Main-Styled'
import bigMac from '../../bigmac.png'
import batata from '../../batata.png'
import sorvete from '../../sorvete.png'
//
import { useState } from 'react'
//
import card3 from '../../card-estamos.png'
import card2 from '../../card-restaurante.png'
import card1 from '../../card-sacola.png'



function Main() {
 
  const [imagem, setimagem] = useState (bigMac)
      
      const trocar1 = () =>  {
        setimagem (bigMac)
      }
      const trocar2 = () =>  {
        setimagem (batata)
      }
      const trocar3 = () =>  {
        setimagem (sorvete)
      }

 
  return (
    
    <>    
    <Main1>
     <State>
        <img src= {imagem}alt="bigmac"/> 
        <h2>BATEU AQUELA<div></div><span>#FOME</span> DE <span> MÉQUI?</span> </h2>   
         </State>
    </Main1>
    <SelectProduct>

<img src= {bigMac}alt="bigmac" onClick={trocar1}/>
<img src= {batata}alt="batata" onClick={trocar2} /> 
<img src= {sorvete}alt="sorvete" onClick={trocar3}/> 
    </SelectProduct>

    <MoreContent>
      <h1>Promoção</h1>

      <CardS>
          <Card>
            <img src={card1} alt="" />
             <p>Que tal um #MéquiNoSofá?</p>
            <a href='https://www.mcdonalds.com.br/mequipravc/mcdelivery'><button>Clique aqui </button></a>
          </Card>
          <Card>
            <img src={card2} alt="" />
            <p>venha conhecer nossa nova loja</p>
            <a href='https://www.mcdonalds.com.br/restaurantes'><button>Clique aqui </button></a>

          </Card>
          <Card>
            <img src={card3} alt="" />
           <p> Medidas  que o Méqui adotou!</p>
           <a href='https://www.arcosdorados.com/brasil-a-arcos-dorados-mantem-medidas-rigorosas-de-seguranca-em-todos-os-segmentos-de-sua-operacao/'><button>Clique aqui </button></a>

          </Card>
      </CardS>
    </MoreContent>
    </>
  )
}
 


export default Main;