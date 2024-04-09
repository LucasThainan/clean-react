import React from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from '@/presentation/pages'

const container = document.getElementById('main')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)
root.render(<Login />)
