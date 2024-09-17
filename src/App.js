import React from 'react';
import FAQs from './components/FAQs/FAQs'
import StepPlan from './components/StepPlan/StepPlan';
import Letter from './components/Letter/Letter';
import Continfolinks from './components/cont-info&links/cont-info&links'
import './App.css'

function App() {
  return (
    <div className="App">
      <StepPlan/>
      <FAQs/>
      <Letter/>
      <Continfolinks/>
    </div>
  );
}

export default App;