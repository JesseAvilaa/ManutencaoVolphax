import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import {
  Wrapper,
  Container,
  PageTitle,
  CallToAction
} from '../styles/pages/Home'

import MaintenanceLogo from '../assets/image01.svg'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <title>Site em construção</title>
      </Head>

      <Container>
        <PageTitle>
          O Site <br /> encontra-se <br /> em criação<b>.</b>
        </PageTitle>

        <CallToAction>
          <p>Fique por dentro de todas as atualizações em nosso site.</p>

          <div className="button-join">
            <Link href="/notifications">
              <a> Receber notificações </a>
            </Link>
          </div>
        </CallToAction>
        <MaintenanceLogo />
      </Container>
    </Wrapper>
  )
}

export default Home
