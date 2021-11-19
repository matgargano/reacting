// import './App.css';
import GradeBot from './Components/GradeBot';
import Greeting from './Components/Greeting';

function App() {
  return (
    <div>
      <Greeting greetingWord="Hey" personName="Mat" />
      <Greeting greetingWord="Yo" personName="Mohamed" />
      <Greeting greetingWord="Sup" personName="Bola" />
      <Greeting personName="Peter" />
      <GradeBot />
      <GradeBot />
      <GradeBot />
    </div>
  );
}

export default App;
