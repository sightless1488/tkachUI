import AppConfiguration from './widgets/AppConfiguration';
import Button from './widgets/Button';
import CheckBox from './widgets/CheckBox';
import InputBox from './widgets/InputBox';
import Label from './widgets/Label';
import RadioButton from './widgets/RadioButton';
import RangeInput from './widgets/RangeInput';

function App() {
  return (
    <AppConfiguration theme="dark" accent="#ee9b00"> 
      <div className="App">
        <InputBox placeholder="Введите текст"></InputBox>
        <Button>Button</Button>
        <CheckBox></CheckBox>
        <Label>Rad</Label> <RadioButton id="rad" name="rad" value="rad"></RadioButton>
        <Label>Rad2</Label> <RadioButton id="rad2" name="rad" value="rad2"></RadioButton>
        <Label>Rad3</Label> <RadioButton id="rad3" name="rad" value="rad3"></RadioButton> 
        <RangeInput></RangeInput>
      </div>
    </AppConfiguration>
  );
}

export default App;
