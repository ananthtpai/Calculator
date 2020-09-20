import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'

import Input from '../Input'

const InputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrapper = styled.div`
  width: 250px;
  margin: 0 auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

const Container = styled.div`
  border: 1px solid black;
`

const InputDisplay = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 35px;
  font-weight: bold;
  font-size: 16px;
`

const OutputDisplay = styled.div`
display: flex;
justify-content: flex-end;
font-size: 50px
`

const inputsAvailable: string[] = [
  'C', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '0', '.', '='
]

const App: React.FC = () => {
  const [ userInput, setUserInput ] = useState<string>('')
  const [ output, setOutput ] = useState<number>(0)

  const handleInput = (input: string) => {
    if (input === '=') {
      let output = eval(userInput)
      setOutput(output)
      setUserInput(output)
    } else if (input === 'C') {
      setUserInput('')
    } else {
      setUserInput(userInput + input)
    }
  }

  return (
    <Wrapper>
      <Container>
        <InputDisplay>
          {userInput}
        </InputDisplay>
        <OutputDisplay>
          {output}
        </OutputDisplay>
        <InputContainer>
          {
            inputsAvailable.map((item, index) => {
              let style 
              if (item === '0') {
                style = {
                  gridColumnStart: 1,
                  gridColumnEnd: 3
                }
              }
              if (index < 3) {
                style = {
                  ...style,
                  background: '#f5e2fd'
                }
              } else if (index % 4 === 3 || index === inputsAvailable.length - 1) {
                style= {
                  ...style,
                  background: '#f6d261'
                }
              }
              
              return <Input 
                item={item} 
                key={index} 
                style={style}
                onClick={handleInput} />
            })
          }
        </InputContainer>
      </Container>
    </Wrapper>
  )
}

export default App
