import logo from './logo.svg';
import classes from './App.module.css';
import FirstComp from './Components/FirstComp/FirstComp';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import FourthPage from './Components/FourthPage/FourthPage';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      {/* <FirstComp />
      <SecondPage />
      <ThirdPage />
      <FourthPage /> */}

      <MainPage />
    </div>
  );
}

export default App;
