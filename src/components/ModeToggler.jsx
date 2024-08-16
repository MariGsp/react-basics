import React from 'react';

const ModeToggler = () => {
  const darkModeOn = true;
  const darkMode = <h1>Dark mode is on</h1>;
  const lightMode = <h1>Light mode is on</h1>;

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
    </div>
  );
};

export default ModeToggler;
