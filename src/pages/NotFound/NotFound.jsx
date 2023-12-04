import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';

const NotFound = () => (
  <Container>
    <h1>Essa página não existe</h1>
    <button type="button" onClick={() => history.push('/')}>
      Início
    </button>
  </Container>
);

export default NotFound;
