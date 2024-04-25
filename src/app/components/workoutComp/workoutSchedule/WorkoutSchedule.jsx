"use client"
import React, { useState } from 'react';
import moment from 'moment';
// import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import styles from "./workoutSchedule.module.css"

const CalendarTimeline = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const startDate = moment().subtract(1, 'days');
  const endDate = moment().add(3, 'days');
  const dateRange = [];
  let currentDatePointer = startDate.clone();
  while (currentDatePointer.isSameOrBefore(endDate)) {
    dateRange.push(currentDatePointer.clone());
    currentDatePointer.add(1, 'day');
  }

  // const handlePrevWeek = () => {
  //   setCurrentDate(currentDate.clone().subtract(1, 'week'));
  // };

  // const handleNextWeek = () => {
  //   setCurrentDate(currentDate.clone().add(1, 'week'));
  // };


  return (
    <div>
      <div className={styles.monthNav}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{currentDate.format('MMM YYYY')}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.week}>
        <div>
          <div className={styles.dateRange}>
            {dateRange.map((date, index) => (
              <div key={index} className={`${styles.dayContainer} ${currentDate.format('ddd, D') == date.format('ddd, D') && styles.today}`}>
                <div>{date.format('ddd')}</div>
                <div>{date.format('D')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.scheduleContainer}>
        <div className={styles.hourlySchedule}>
          <div>6:00 AM</div>
          <div>7:00 AM</div>
          <div>8:00 AM</div>
          <div>9:00 AM</div>
          <div>10:00 AM</div>
          <div>11:00 AM</div>
          <div>12:00 PM</div>
          <div>1:00 PM</div>
          <div>2:00 PM</div>
          <div>3:00 PM</div>
          <div>4:00 PM</div>
          <div>5:00 PM</div>
          <div>6:00 PM</div>
        </div>
        <div style={{ flex: '1' }}>
        </div>
      </div>
    </div>
  );
};

export default CalendarTimeline;
