import './App.css';

function App() {
  return (
    <div className="App">
      HEADER component

      WRAPPER
        CURRENT MATCH component
          team component --- home team - score, visiting team - score
          finish match button
          UPDATE CURRENT MATCH
            inputs scores
            submit button

        START NEW MATCH
          inputs teams and score
          submit button

        LIVE MATCH LIST component
          team component --- matches sorted by highest score, and later by match duration
      /Wrapper
    </div>
  );
}

export default App;
