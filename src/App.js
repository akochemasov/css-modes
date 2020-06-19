import React from 'react';
import './App.css';
import Button1 from './components/Button1/Button';
import Button2 from './components/Button2/Button2';
import Button3 from './components/Button3/Button';
import Button4 from './components/Button4/Button';

function App() {
  return (
    <div className="App">
      <Button1 diff={'modules'} />
      <Button2 diff={'modules'} />
      <Button3 diff={'css'} />
      <Button4 type={'message'} diff={'styled-components'} />
      <Button4 primary type={'error'} diff={'styled-components'} />
    </div>
  );
}

export default App;
