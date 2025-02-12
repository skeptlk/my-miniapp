import { getToday } from '../../utils/date';
import CalendarSlider from '../CalendarSlider';
import styles from './AppHeader.module.scss';



const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.today}>{getToday()}</div>
      <CalendarSlider />
    </div>
  )
}

export default AppHeader;
