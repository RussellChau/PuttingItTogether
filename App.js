import React from 'react';

import Component from './components/component';

function App() {
  return (
      <div>
          <Component firstName="Johnny" lastName="Bravo" age={37} hairColor="Wicked"/>
          <Component firstName="Count" lastName="Dracula" age={12000} hairColor="black"/>
      </div>
  );
}

export default App;
