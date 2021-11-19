import { useState } from 'react';
import Button from './Button';

function GradeBot() {
  const [grade, setGrade] = useState(0);

  function incrementGrade() {
    setGrade(grade + 5);
  }
  function decrementGrade() {
    setGrade(grade - 5);
  }
  let gradeNote = 'You have passed';
  let alertColor = 'success';
  if (grade <= 10) {
    gradeNote = 'You need to do better...';
    alertColor = 'danger';
  } else if (grade < 70) {
    gradeNote = 'You are so close to passing!';
    alertColor = 'warning';
  }

  return (
    <div className="my-5 container">
      <div className={'alert alert-' + alertColor}>{gradeNote}</div>
      <p>Your grade is {grade}</p>
      {/* <button className="btn btn-primary" onClick={incrementGrade}>
        Increment Grade
      </button> */}
      <Button onClick={incrementGrade} color="primary">
        Increment <strong>Grade</strong>!!
      </Button>
      {/* <button
        className="btn btn-danger mx-2"
        onClick={() => {
          setGrade(grade - 5);
        }}
      >
        Decrement Grade
      </button> */}
      <Button
        onClick={() => {
          setGrade(grade - 5);
        }}
      >
        Decrement Grade
      </Button>
    </div>
  );
}

export default GradeBot;
