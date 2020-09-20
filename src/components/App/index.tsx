import React from 'react'
import './App.css'
import { Button } from 'antd'
import { action } from '@storybook/addon-actions'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button type='primary'>Test</Button>
    </div>
  )
}

export default App
