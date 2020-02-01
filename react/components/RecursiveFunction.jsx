import React, { useState, useEffect } from 'react';

export default function RecursiveFunction() {
  const [ x, setX ] = useState(5);
  const factorial = () => {
    if ( x <= 1 ) {
      setX( 1 );
    } else {
      setX( x - 1 )

    }
  }
  
  useEffect(() => {
    factorial();
  }, [x] )

  return(
    <div className="some-component flex-center space-evenly block-standard">
      <button onClick={ factorial } >Click</button>
      <p>{ x }</p>
    </div>
  );
}
