import React from 'react'
import { Link } from 'react-router-dom'
import * as Styles from './signup-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Signup: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state: {} }}>
        <form className={Styles.form}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button type="submit" className={Styles.submit}>Entrar</button>
          <Link to="/login" className={Styles.link}>Voltar Para Login</Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
