import React from 'react';

function Greeting(props) {
  console.log(props);
  // let actualGreeting = props.greetingWord;
  // if(!actualGreeting) {
  //     actualGreeting = 'hello';
  // }

  return (
    <p>
      {props.greetingWord}, {props.personName}!!!
    </p>
  );
}

Greeting.defaultProps = {
  greetingWord: 'Hello',
};

export default Greeting;
