import * as S from './styles'
import RadioOption from 'components/Radio'

import { dataFilteredProps } from 'components/TicketTable'
import { useState } from 'react'

const FormTicket = (data: any) => {
  const { datas } = data

  const [text, setText] = useState(datas.content)

  return (
    <S.Wrapper>
      <S.CustomertLabel>
        <strong>Name</strong>:{datas.Customer}
      </S.CustomertLabel>
      <S.SubjectLabel>
        <strong>Subject </strong>: {datas.Subject}
      </S.SubjectLabel>
      <S.tags>
        <strong>Tag</strong>: {datas.tags}
      </S.tags>
      <S.content>
        <S.inputContent
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </S.content>
      <S.status>
        <RadioOption />
      </S.status>
    </S.Wrapper>
  )
}

export default FormTicket
