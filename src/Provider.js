import React, { useState } from 'react';

import myContext from './Context';

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: 'Go to a Secret Mission',
    agent: '007',
    accept: 'Not Accepted',
  });

  return (
    <div>
      <myContext.Provider
        value={{
          data: mission,
          isMissionAccepted: () => {
            setMission({ ...mission, accept: 'ACCEPTED' });
          },
        }}
      >
        {props.children}
      </myContext.Provider>
    </div>
  );
};

export default Provider;
