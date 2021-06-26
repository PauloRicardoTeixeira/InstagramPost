import Button from 'components/Button'
import Heading from 'components/Heading'
import TicketTable from 'components/TicketTable'
import * as S from './styles'

const MainTicketTemplate = () => (
  <S.Wrapper>
    <Heading color="black" lineColor="secondary" lineBottom>
      Ticket Manager
    </Heading>
    <S.ButtonWrapper>
      <Button size="small"> New Ticket</Button>
    </S.ButtonWrapper>
    <h1>My Tickets</h1>
    <S.TiketsWrapper>
      <TicketTable />
    </S.TiketsWrapper>
  </S.Wrapper>
)

export default MainTicketTemplate
