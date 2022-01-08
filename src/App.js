import StartPage from './components/StartPage';
import './App.css';
import { TranslateProvider } from 'react-translate-json';

const translationOptions = {
  pathPrefix: '/translations', // Path to your translations
  locale: 'en', // User current locale
  fallbackLocale: 'en' // Fallback locale
};

function App() {
  return (
  <TranslateProvider {...translationOptions}>
    <div className='mainDiv'/>
    <StartPage/>
  </TranslateProvider>
  );
}

export default App;
