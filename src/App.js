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
            <Button action={true} />
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer>
            <Label text='<Button variant="outline"/>' />
            <Button variant="outline" />
          </ButtonContainer>

          <ButtonContainer>
            <Label text={'&:hover, &:focus'} />
            <Button variant="outline" action={true} />
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer>
            <Label text='<Button variant="text"/>' />
            <Button variant="text" />
          </ButtonContainer>
          <ButtonContainer>
            <Label text={'&:hover, &:focus'} />
            <Button variant="text" action={true} />
          </ButtonContainer>
        </Row>
      </main>
    </div>
  );
}

export default App;
