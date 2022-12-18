import './App.css';
import { Button } from './components/Button.jsx';
import { Row } from './components/Row';
import { ButtonContainer } from './components/ButtonContainer';

function App() {
  return (
    <div className="App">
      <header>
        <h3>Buttons</h3>
      </header>
      <main>
        <Row>
          <ButtonContainer>
            <label className="button-container__label">{'<Button />'}</label>
            <Button></Button>
          </ButtonContainer>

          <ButtonContainer>
            <label className="button-container__label">
              '&:hover, &:focus'
            </label>
            <Button variant="" color="default"></Button>
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer>
            <label className="button-container__label">
              {'<Button variant="outline"/>'}
            </label>
            <Button variant="outline"></Button>
          </ButtonContainer>

          <ButtonContainer>
            <label className="button-container__label">
              {'&:hover, &:focus'}
            </label>
            <Button variant="outline"></Button>
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer>
            <label className="button-container__label">
              {'<Button variant="text"/>'}
            </label>
            <Button variant="text"></Button>
          </ButtonContainer>
          <ButtonContainer>
            <label className="button-container__label">
              {'&:hover, &:focus'}
            </label>
            <Button variant="text"></Button>
          </ButtonContainer>
        </Row>
      </main>
    </div>
  );
}

export default App;
