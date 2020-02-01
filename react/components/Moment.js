import React from 'react';
import moment from 'moment';

export default function Moment() {
  // console.log(moment().format().replace(/[-,:,T]/ig,'').substring(0,14) + 0)
  let str = '2020-02-01T00:32:30-08:00';
  console.log(parseInt(str.replace(/[-,:,T]/ig,'').substring(0,14)) + 3) // can add to
  console.log(moment().format().replace(/[-,:,a-zA-Z]/ig,'').substring(0,14)) // cannot add to it concatinates
  let time = moment().format().substring(0,16)
  let pastTime = moment().format()

  return(
    <div className="some-component flex-center space-evenly block-standard">
      <p>{time}</p>
      <p>{pastTime}</p>
    </div>
  );
}
