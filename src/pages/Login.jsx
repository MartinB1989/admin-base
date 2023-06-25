import { Stack, TextField } from '@mui/material'
import React from 'react'
import '../assets/scss/login.scss'

export const Login = () => {
  return (
    // <Container maxWidth="md" className="login-container">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        useFlexGap
        spacing={{xs: 2}}
        className="login-container"
      >
        <h1 className='login-title'>Login</h1>
        <TextField color='primary' size='small' label='Usuario'  variant='outlined' />
        <TextField color='primary' size='small' label='Contraseña' variant='outlined' />
      </Stack>
    // </Container>
  )
}
