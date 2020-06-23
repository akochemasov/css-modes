import React from 'react';
import './App.css';
import ButtonCss from './components/ButtonCss/ButtonCss';
import ButtonСssModules from './components/ButtonСssModules/ButtonСssModules';
import ButtonStyledComponent from './components/ButtonStyledComponent/ButtonStyledComponent';
import ButtonEmotion from './components/ButtonEmotion/ButtonEmotion';

function App() {
  return (
    <div className="app">
      <ButtonCss diff={'cs1s'}/>
      <ButtonСssModules diff={'modules'}/>
      <ButtonCss diff={'cs1s'}/>
      <ButtonStyledComponent type={'message'} diff={'styled-components'}/>
      <ButtonStyledComponent primary type={'error'} diff={'styled-components'}/>
      <ButtonEmotion diff={'emotion'}/>
    </div>
  );
}

export default App;
