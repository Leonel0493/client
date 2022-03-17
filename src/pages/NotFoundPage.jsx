import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function NotFoundPage() {
  return (
    <Container>
      <Row>
        <Col className='mt-5'>
          <img style={{width: '100%'}} src="/img/404-not-found.svg" alt="error 404" />
        </Col>
        <h2>¿Te has perdido?</h2>
        <p>Vuelve al <Link to={routes.home}>inicio</Link></p>
      </Row>
    </Container>
  )
}
