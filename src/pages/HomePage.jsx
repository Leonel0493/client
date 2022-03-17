import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function HomePage() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={{span: 12}} md={{span: 6}} className='mb-2'>
          <h2>Bienbenid@ al Gestor de Tareas</h2>
          <p>¡Aquí podrás gestionar tus proyectos!</p>
          <p>
            Marca tus tareas como terminadas. Agrega, elimina o actuliaza tus tareas.
          </p>
          <div>
            <Link to={routes.login}>Ingresa</Link> o &nbsp;
            <Button as={Link} to={routes.register}>Crea una cuenta</Button>
          </div>
        </Col>
        <Col>
          <img
            className='img-fluid'
            src='/img/task-manager.svg'
            alt='gestor-tareas'
          />
          <p>Gestiona tu tiempo, mejora tu productividad!!!</p>
        </Col>
      </Row>
    </Container>
  )
}
