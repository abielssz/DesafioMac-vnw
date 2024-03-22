/** @format */

import Header from './assets/components/Header/Header'
import Main from './assets/components/Main/Main'
import Footer from './assets/components/Footer/Footer'
import { createGlobalStyle } from 'styled-components'




function App() {

  return (
    <>

    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
   const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        
    }
`
export default App
