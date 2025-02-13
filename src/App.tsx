import { Box, createTheme, Modal, ThemeProvider } from '@mui/material';
import style from './App.module.scss';
import AppHeader from './components/AppHeader';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon';
import { formatDate } from './utils/date';
import Picker from 'rmc-picker';


function App() {
  const [visible, setVisible] = useState(false);
  const [setupVisible, setSetupVisible] = useState(false);

  const [age, setAge] = useState(20);

  const theme = createTheme({});

  const [period, setPeriod] = useState<[Date, Date]>([new Date(), new Date()]);

  return (

    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ru">

      <ThemeProvider theme={theme}>

        <div className={style.App}>
          <header>
            <AppHeader />
          </header>

          {
            period[0] &&
            <span>
              Предыдущие месячные:
              {formatDate(period[0])} - {formatDate(period[1])}
            </span>
          }

          <h3 onClick={() => setVisible(true)}>Установить месячные</h3>

          {
            age &&
            <span>Выбран возраст: {age} лет</span>
          }

          <h3 onClick={() => setSetupVisible(true)}>Установить возраст</h3>

          <Modal
            open={visible}
            onClose={() => setVisible(false)}
          >
            <Box className={style.modal}>
              <DateRangeCalendar onChange={(value) => setPeriod(value)} calendars={1} />
            </Box>
          </Modal>

          <Modal
            open={setupVisible}
            onClose={() => setSetupVisible(false)}
          >
            <Box className={style.modal}>
              <Picker indicatorClassName="my-picker-indicator" selectedValue={age} onValueChange={setAge}>
                {
                  [...Array(50).keys()].map(i => (
                    <Picker.Item className="my-picker-view-item" value={i}>{i}</Picker.Item>
                  ))
                }
              </Picker>
            </Box>
          </Modal>

        </div>
      </ThemeProvider>
    </LocalizationProvider>

  );
}

export default App;
