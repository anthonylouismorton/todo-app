import {useState, useContext, React} from 'react';
import {FormGroup,FormControlLabel, Switch} from '@mui/material';
import {SettingsContext} from '../../context/settings'
import ToDo from '../todo/todo';

function Settings() {
  let SettingsValues = useContext(SettingsContext);
  console.log(SettingsValues.completed)
  const [checked, setChecked] = useState(true)
  function clickHandler(e){
    setChecked(e.target.checked)
    if(checked){
      console.log('in here')
      SettingsValues.setCompleted(true)
    }
    else{
      console.log('in the second one')
      SettingsValues.setCompleted(false)
    }
    
  }

    return (
    <>
    <h1>hello there</h1>
    <FormGroup>
      <FormControlLabel  control={<Switch checked={checked} onChange={clickHandler} />} label="Show completed" />
    </FormGroup>
    </>
    );
}

export default Settings;