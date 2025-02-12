import { useMemo } from 'react';
import style from './CalendarSlider.module.scss';
import { popup, retrieveLaunchParams } from '@telegram-apps/sdk';
import cn from 'classnames';

const CalendarSlider = () => {

  const options = useMemo(() => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const formatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' });
    const formatter2 = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' });

    const dates = [];

    for (let date = startOfMonth; date <= endOfMonth; date.setDate(date.getDate() + 1)) {
      dates.push({
        day: formatter.format(date),
        weekday: formatter2.format(date),
        isWeekend: date.getDay() === 0 || date.getDay() === 6,
        isToday: date.getDate() === today.getDate()
      });
    }

    return dates;
  }, [])

  const { tgWebAppData } = retrieveLaunchParams();
  const { user } = tgWebAppData ?? {};

  const open = async () => {
    popup.open({
      title: `Hello`,
      message: `Hello, ${user?.first_name} ${user?.last_name} (${user?.username})`,
      buttons: [{ id: 'my-id', type: 'default', text: 'Click!' }],
    });
  };


  return (
    <div className={style.container}>
      {
        options.map(date => (
          <div
            className={cn(
              style.date,
              date.isWeekend && style.weekend,
              date.isToday && style.today,
            )}
            key={date.day}
            onClick={open}
          >
            <span>{date.weekday}</span>
            <span>{date.day}</span>
          </div>
        ))
      }
    </div>
  )
}

export default CalendarSlider;
