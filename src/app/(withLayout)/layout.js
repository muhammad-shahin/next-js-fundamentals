import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='text-4xl text-center'>Header</h1>
      {children}
      <h1 className='text-4xl text-center'>Footer</h1>
    </div>
  );
};

export default Layout;
