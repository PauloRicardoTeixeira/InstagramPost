import { Email, Lock } from '@styled-icons/material-outlined'

import { FormLink, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Router from 'next/router'

import * as S from './styles'
import { useState } from 'react'

const FormSignIn = () => {
  const [values, setValues] = useState('')

  const onsubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('ssssss', values)
    if (values === 'agente@ticket.com') {
      console.log('agente')
      Router.replace('/tickets')
    }
    if (values === 'cliente@ticket.com') {
      console.log('agente')
      Router.replace('/ticketsclient')
    }
  }

  return (
    <FormWrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        <Button onClick={onsubmit} size="large" fullWidth>
          Sign in now
        </Button>

        <FormLink>
          Don’t have an account? <a>Sign up</a>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
