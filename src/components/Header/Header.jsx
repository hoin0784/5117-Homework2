import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {

  const [nowDate, setNowDate] = useState(new Date());

  const renderDate = () => {
    if (nowDate) {
      const dayToKorean = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const year = nowDate.getFullYear();
      const month = String(Number(nowDate.getMonth()) + 1);
      const date = nowDate.getDate();
      const day = nowDate.getDay();

      return dayToKorean[day - 1] + ' ' + month + ' / ' + date + ' / ' + year
    }
    return '';
  }

  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}