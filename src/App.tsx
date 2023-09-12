import React from 'react';
import './App.scss';
import Button from './component/Button';
import Button2 from './component/Button2';

function App() {
  return (
    <>
    <Button type='primary' shape='circle' size='sm'></Button>
    <Button2 type='primary' shape='circle' size='sm'></Button2>
    </>
  );
}

export default App;
