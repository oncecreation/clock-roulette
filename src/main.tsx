import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
const rootNode = document.getElementById('root')
if (rootNode) {
  createRoot(rootNode).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}
