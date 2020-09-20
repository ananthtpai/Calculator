import React from 'react'
import styled from 'styled-components'

interface Props {
  item: string,
  onClick: (item: string) => void,
  style?: React.CSSProperties,
}

const Container = styled.span`
  background: #f0edff;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid darkgray;
`

const Input:React.FC<Props> = ({item, style, onClick}) => {

  const handleOnClick: React.MouseEventHandler<HTMLDivElement> = () => {
    onClick(item)
  }

  return (<Container style={style} onClick={handleOnClick}>
    {item}
  </Container>
  )
}

export default Input