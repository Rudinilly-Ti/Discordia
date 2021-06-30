import React from 'react'
import Head from 'next/head'
import Logo from '../assets/logo.svg'
import Twiter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Youtube from '../assets/youtube.svg'


import { BottomBar, Container, Footer, About, ButtonFooter } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Discordia</title>
      </Head>

      
      <Footer>
        <div>
          <About>
            <div>
              <h2>Imagine um lugar</h2>
              <span>
                <Twiter />
                <Instagram />
                <Facebook />
                <Youtube />
              </span>
            </div>
            <div>
              <h5>Produto</h5>
              <p>Baxar</p>
              <p>Nitro</p>
              <p>Status</p>
            </div>
            <div>
              <h5>Empresa</h5>
              <p>Sobre</p>
              <p>Empregos</p>
              <p>Marca</p>
              <p>Sala de Imprensa</p>
            </div>
            <div>
              <h5>Recursos</h5>
              <p>Faculdade</p>
              <p>Suporte</p>
              <p>Segurança</p>
              <p>Blog</p>
              <p>Comentários</p>
              <p>Desenvolvedores</p>
              <p>StreamKit</p>
            </div>
            <div>
              <h5>Política</h5>
              <p>Termos</p>
              <p>Privacidade</p>
              <p>Diretrizes</p>
              <p>Reconhecimentos</p>
              <p>Licenças</p>
              <p>Moderação</p>
            </div>
          </About>
          <BottomBar>
            <Logo />
            <ButtonFooter>Abrir o Discord</ButtonFooter>
          </BottomBar>
        </div>
      </Footer>
    </Container>
  )
}

export default Home
