import './App.css';
import SurveyComponent from './components/surveyComponent';
import Results from './components/results';
import { useState } from 'react';

function App() {
  const [surveyData, setSurveyData] = useState(null);

  const handleSurveyComplete = (data) => {
    setSurveyData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <div className="App-body">
        <div className="survey">
          {surveyData === null && <SurveyComponent onComplete={handleSurveyComplete}/>}
          {/* <SurveyComponent onComplete={handleSurveyComplete}/> */}
          {/* <SurveyComponent /> */}
        </div>
        <div className = "results">
          <Results 
            data = {surveyData}
          />
        </div>
        </div>
          
      </body>
    </div>
  );
}

export default App;
