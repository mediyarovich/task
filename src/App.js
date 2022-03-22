import React from 'react';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Ingredients from './components/Ingredients/Ingredients';
import Recepts from './components/Recepts/Recepts';

const App = () => {
  return (
    <div>
      <Counter/>
      <Recepts/>
      <Ingredients/>
      <Form/>
    </div>
  );
};

export default App;