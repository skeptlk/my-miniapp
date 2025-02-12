import { Box, createTheme, Modal, ThemeProvider } from '@mui/material';
import style from './App.module.scss';
import AppHeader from './components/AppHeader';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon';


function App() {
  const [visible, setVisible] = useState(false);

  const theme = createTheme({});

  return (

    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ru">

      <ThemeProvider theme={theme}>

        <div className={style.App}>
          <header>
            <AppHeader />
          </header>
          <h3 onClick={() => setVisible(true)}>Open calendar</h3>

          <Modal
            open={visible}
            onClose={() => setVisible(false)}
          >
            <Box className={style.modal}>
              <DateRangeCalendar calendars={1} />
            </Box>
          </Modal>

        </div>
      </ThemeProvider>
    </LocalizationProvider>

  );
}

export default App;
