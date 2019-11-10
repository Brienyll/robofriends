import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{ overflowY: 'scroll', border: '1px solid #ccc', height: 'auto' }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
