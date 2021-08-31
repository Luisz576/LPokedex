//set api as global
global.api = require('./src/services/api')

import React from 'react'
import Routes from './src/routes'

export default function App() {
  return (<Routes/>)
}