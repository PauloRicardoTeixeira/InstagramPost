import { Radio, RadioChangeEvent } from 'antd'
import React from 'react'
import * as S from './styles'

const RadioOption = () => {
  const [value, setValue] = React.useState('a')

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  return (
    <Radio.Group onChange={onChange} value={value}>
      <S.Wrapper>
        <Radio value={'a'}>Aberto</Radio>
        <br />
        <Radio value={'aa'}>Aguardando Agente</Radio>
        <br />
        <Radio value={'ac'}>Aguardando cliente</Radio>
        <br />
        <Radio value={'f'}>Finalizado</Radio>
        <br />
      </S.Wrapper>
    </Radio.Group>
  )
}

export default RadioOption
