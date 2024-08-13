import React from 'react';

const Heading = () => {
  const headingStyle = {
    color: 'tomato',
    fontSize: '50px',
  };

  return (
    <div className="App-header">
      <h1 style={headingStyle}>
        Hello,
        {/* {props.firstName} */}
        !
      </h1>
    </div>
  );
};

export default Heading;
