import Link from 'next/link'
import Image from 'next/image'

import * as S from './style'
import Heading from 'components/Heading'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="A men With problem"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a></a>
        </Link>

        <div>
          <Heading size="huge"> who ya gonna call ?</Heading>
          <S.Subtitle>
            <strong>Here</strong> you will find who will solve your problems
          </S.Subtitle>
        </div>

        <S.Footer>
          TicketResolver {currentYear} © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a></a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
