import './App.css';
import { Button } from './components/Button.jsx';
import { Row } from './components/Row';
import { ButtonContainer } from './components/ButtonContainer';
import { Label } from './components/Label';

function App() {
  return (
    <div className="App">
      <header>
        <h3>Buttons</h3>
      </header>
      <main>
        <Row>
          <ButtonContainer>
            <Label text="<Button />" />
            <Button />
          </ButtonContainer>

          <ButtonContainer>
            <Label text="&:hover, &:focus" />
            <Button variant="" color="default" />
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer>
            <Label text='<Button variant="outline"/>' />
            <Button variant="outline" />
          </ButtonContainer>

          <ButtonContainer>
            <Label text={'&:hover, &:focus'} />
            <Button variant="outline" />
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer>
            <Label text='<Button variant="text"/>' />
            <Button variant="text" />
          </ButtonContainer>
          <ButtonContainer>
            <Label text={'&:hover, &:focus'} />
            <Button variant="text" />
          </ButtonContainer>
        </Row>
      </main>
    </div>
  );
}

export default App;
