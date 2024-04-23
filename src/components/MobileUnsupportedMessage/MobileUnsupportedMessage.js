import React from 'react';

const MobileUnsupportedMessage = () => {
  return (
    <div>
      <h2>Mobile Device Not Supported</h2>
      <p>Sorry, this website does not support browsing on mobile devices. Please use a desktop or laptop for the best experience.</p>
    </div>
  );
};

const App = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div>
      {isMobile ? <MobileUnsupportedMessage /> : null}
    </div>
  );
};

export default App;
