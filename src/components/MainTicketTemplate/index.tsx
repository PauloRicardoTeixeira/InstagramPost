import Button from 'components/Button'
import Heading from 'components/Heading'
import TicketTable from 'components/TicketTable'
import * as S from './styles'

export type TikectsTittle = {
  title: string
}

const MainTicketTemplate = ({ title }: TikectsTittle) => (
  <S.Wrapper>
    <Heading color="black" lineColor="secondary" lineBottom>
      {title}
    </Heading>
    <S.ButtonWrapper>
      {title === 'Call Someone' && <Button size="small"> New Ticket</Button>}
    </S.ButtonWrapper>
    <h1>My Tickets</h1>
    <S.TiketsWrapper>
      <TicketTable />
    </S.TiketsWrapper>
  </S.Wrapper>
)

export default MainTicketTemplate
