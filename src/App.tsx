import {useRef} from 'react';

import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomSnackBar from './components/snackbar/customSnackbar';
import Header from './components/header/header';
import IntroCardSection from './components/topComponent/introMain';
import InputCardSection from './components/bottomComponent/mainCard/inputCardSection';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const dashboardRef  = useRef<HTMLDivElement | null>(null);
 
  return (
    <div className="App">
      <CustomSnackBar/>
     <ThemeProvider theme={darkTheme}>
      <Header/>
      <IntroCardSection scrollRef={dashboardRef}/>
      <InputCardSection scrollRef={dashboardRef}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
