import React, { useState, FormEvent } from 'react'
import Head from 'next/head'

import {
  Wrapper,
  Tableone,
  Tabletwo,
  Container
} from '../styles/pages/Notification'

import axios from 'axios'

const Notification: React.FC = () => {
  const [email, setEmail] = useState('')
  const [warning, setWarning] = useState('')

  function handleSignUpToNotifications(event: FormEvent) {
    event.preventDefault()
    axios.post('/api/subscribe', { email })
    setWarning('Usuário registrado!')
  }

  return (
    <Wrapper>
      <Head>
        <title>Área de Notificações</title>
      </Head>
      <Tableone>
        <Tabletwo>
          <Container>
            <div className="textMain">
              <h1>Fique por dentro de tudo!</h1>
            </div>
            <form className="form" onSubmit={handleSignUpToNotifications}>
              <p>Inscreva-se para receber as notificações sobre o site.</p>
              <input
                type="text"
                className="textarea"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit">INSCREVER</button>
              <p>{warning}</p>
            </form>
          </Container>
        </Tabletwo>
      </Tableone>
    </Wrapper>
  )
}

export default Notification
