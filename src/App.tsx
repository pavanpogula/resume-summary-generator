import { useRef } from 'react';

import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomSnackBar from './components/snackbar/customSnackbar';
import Header from './components/header/header';
import IntroCardSection from './components/topComponent/introMain';
import InputCardSection from './components/bottomComponent/mainCard/inputCardSection';
import Footer from './components/footer/footer';
import ErrorPage from './components/error/errorPage';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  if (typeof window === 'undefined') {
    return <ErrorPage text="Please refresh"/>;
  }
  const screenWidth = window.innerWidth;
  return (
    <div className="App">
      
      <CustomSnackBar />
      <ThemeProvider theme={darkTheme}>
        <Header />
        {
          screenWidth < 1200 ?
          <ErrorPage text='Please Open In Desktop'/>
          :<>
          <IntroCardSection scrollRef={dashboardRef}/>
          <InputCardSection scrollRef={dashboardRef}/>
          </>
        }
     
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
