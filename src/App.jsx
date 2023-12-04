import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header.jsx';
import Routes from './routes/index.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
