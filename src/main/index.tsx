import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignUp } from './factories/pages/signup/signup-factory'

const container = document.getElementById('main')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)
root.render(
  <Router
    makeLogin={makeLogin}
    makeSignUp={makeSignUp}
  />
)
