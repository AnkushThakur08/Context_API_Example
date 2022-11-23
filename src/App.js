import React from 'react';
import Provider from './Provider';
import myContext from './Context';

const App = () => {
  const Agents = () => {
    return <AgentOne />;
  };

  const AgentOne = () => {
    return <AgentTwo />;
  };

  const AgentTwo = () => {
    return <AgentBond />;
  };

  const AgentBond = () => {
    return (
      <myContext.Consumer>
        {(Context) => (
          <div>
            <h3>Mission Name: {Context.data.mname}</h3>
            <h2> Agent Number: {Context.data.agent}</h2>
            <h1>Status: {Context.data.accept}</h1>
            <button onClick={Context.isMissionAccepted}>Click to Accept</button>
          </div>
        )}
      </myContext.Consumer>
    );
  };

  <myContext.Consumer>{(Context) => {}}</myContext.Consumer>;

  return (
    <div>
      <h1>Let's TRY</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
