import StartPage from './components/StartPage';
import './App.css';
import text from './translations/en.json'

console.log(text);

function App() {
  return (
    <>
        <div className='mainDiv'/>
        <StartPage/>
    </>
  );
}

export default App;
