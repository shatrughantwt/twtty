import {Navbar} from '@/components/core/Navbar'
import {Container} from '@/components/core/Container'
import {LafdaSection} from '@/components/landing/lafda-sention'

function Home() {
  return (
    <Container>
      <Navbar/>
      <LafdaSection/>
    </Container>
  )
}

export default Home