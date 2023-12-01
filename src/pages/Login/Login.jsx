import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

function Login() {
  return (
    <Container>
      <Title isRed={true}>Login</Title>
      <small>Oi</small>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;
