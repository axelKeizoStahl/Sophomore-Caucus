"use client";
import styles from './Schedule.module.css'
import { useState, useEffect } from 'react';
import { i18n } from '../../../next.config';
import { Herr_Von_Muellerhoff, Warnes } from 'next/font/google';


export const dynamic = "force-dynamic";
export default function Home() {
  let working_sched = optimizedBellSchedules.find(schedule => schedule.name == "Regular").schedule;

  const [min, setMin] = useState(() => {
    let currpd = getCurrPd(getCurrTime(), working_sched);
    let newTime = findCurrMin(getCurrTime(), working_sched, currpd)
    return newTime;
  });

  var time = getCurrTime();
  useEffect(() => {
    setInterval(() => {
      time += 1;
      if (time % 60 == 0) {
        let newTime = findCurrMin(getCurrTime(), working_sched, min[3]);
        time = newTime[2];
        if (newTime.slice(0, 2) != min.slice(0, 2)) { setMin(newTime); }
      }
    }, 1000)
  });
  return (
    <div className={styles.sched}>
      <div className={styles.period}>{min[3]}</div>
      <div className={`${typeof (min[3]) == 'string' ? styles.col : ''} ${styles.time}`}>
        <div className={`${typeof (min[3]) == 'string' ? '' : styles.min} ${styles.minDon}`}>{min[0]}</div>
        <div className={`${typeof (min[3]) == 'string' ? '' : styles.min} ${styles.minTo}`}>{min[1]}</div>
      </div>
    </div>
  )
}

function findCurrMin(time, working_sched, currpd) {
  let date = new Date;
  date = date.getDate()
  if (date >= 23 && date < 30) {
    return ["No", "School", time, "No School"];
  }
  else if (typeof (currpd) == 'string') {
    if (time < working_sched[0].start && currpd != "Before School") {
      return ["Before", "School", time, "Before School"];
    } else if (time >= working_sched[0].start && currpd != "After School") {
      return [0, secToMin(working_sched[0].end - time), time, 1];
    } else {
      return currpd.split(' ').concat([time, currpd]);
    }
  }
  else {
      if (!Number.isInteger(currpd)) {
        if (time >= working_sched[currpd - 0.5].start) {
          let secToEnd = working_sched[currpd - 0.5].end - time;
          return [0, secToMin(secToEnd), time, currpd + 0.5];
        } else {
          return [secToMin(time - working_sched[currpd - 1.5].end), secToMin(working_sched[currpd - .5].start - time), time, currpd];
        }
      } else {
        if (time > working_sched[currpd - 1].end) {
          if (currpd == 10) {
            return ["After", "School", time, "After School"];
          } else {
            return [0, secToMin(working_sched[currpd].start - working_sched[currpd - 1].end), time, currpd + 0.5];
          }
        } else {
          return [secToMin(time - working_sched[currpd - 1].start), secToMin(working_sched[currpd - 1].end - time), time, currpd];
        }
      }
  }
}

function getCurrPd(time, working_sched) {
    let low = 0;
    let top = 19;
    let mid = 9;

    if (time < working_sched[0].start) { return "Before School"; }
    else if (time > working_sched[9].end) { return "After School"; }

    while (top - low > 1) {
      let current_pd = working_sched[Math.floor(mid / 2)];
      if (mid % 2 == 0) {
        var mid_time = current_pd.start;
      } else {
        var mid_time = current_pd.end;
      }

      if (mid_time == time) {
        return current_pd.pd;
      } else if (mid_time > time) {
        top = mid;
        mid = Math.floor((low + top) / 2);
      } else {
        low = mid;
        mid = Math.floor((low + top) / 2);
      }
    }
    if (low % 2 == 0) {
      return low / 2 + 1;
    } else {
      return Math.floor(low / 2) + 1;
    }
}

function getCurrTime() {
  var currDate = new Date();
  return currDate.getHours() * 3600 + currDate.getMinutes() * 60 + currDate.getSeconds();
}

function secToMin(sec) {
  return Math.floor(sec / 60)
}

function getSecondsFromString(time) {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 3600 + Number(minutes) * 60;
}

const bellSchedules = {
  'Regular': [
    { pd: '1', start: '8:00', end: '8:41' },
    { pd: '2', start: '8:45', end: '9:26' },
    { pd: '3', start: '9:31', end: '10:15' },
    { pd: '4', start: '10:20', end: '11:01' },
    { pd: '5', start: '11:06', end: '11:47' },
    { pd: '6', start: '11:52', end: '12:33' },
    { pd: '7', start: '12:38', end: '13:19' },
    { pd: '8', start: '13:24', end: '14:05' },
    { pd: '9', start: '14:09', end: '14:50' },
    { pd: '10', start: '14:54', end: '15:35' },
  ],
  'Conference': [
    { pd: '1', start: '8:00', end: '8:37' },
    { pd: '2', start: '8:41', end: '9:18' },
    { pd: '3', start: '9:22', end: '9:59' },
    { pd: '4', start: '10:03', end: '10:40' },
    { pd: '5', start: '10:44', end: '11:21' },
    { pd: '6', start: '11:25', end: '12:02' },
    { pd: '7', start: '12:06', end: '12:43' },
    { pd: '8', start: '12:47', end: '13:24' },
    { pd: '9', start: '13:28', end: '14:05' },
    { pd: '10', start: '14:09', end: '14:46' },
  ],
  'Homeroom': [
    { pd: '1', start: '8:00', end: '8:40' },
    { pd: '2', start: '8:45', end: '9:25' },
    { pd: '3', start: '9:29', end: '10:09' },
    { pd: 'hr', start: '10:13', end: '10:25' },
    { pd: '4', start: '10:30', end: '11:10' },
    { pd: '5', start: '11:14', end: '11:54' },
    { pd: '6', start: '11:58', end: '12:38' },
    { pd: '7', start: '12:42', end: '13:22' },
    { pd: '8', start: '13:26', end: '14:06' },
    { pd: '9', start: '14:10', end: '14:50' },
    { pd: '10', start: '14:55', end: '15:35' },
  ],
  'Extended Homeroom': [
    { pd: '1', start: '8:00', end: '8:41' },
    { pd: '2', start: '8:45', end: '9:25' },
    { pd: '3', start: '9:29', end: '10:08' },
    { pd: 'hr', start: '10:12', end: '10:33' },
    { pd: '4', start: '10:37', end: '11:16' },
    { pd: '5', start: '11:20', end: '11:59' },
    { pd: '6', start: '12:03', end: '12:42' },
    { pd: '7', start: '12:46', end: '13:25' },
    { pd: '8', start: '13:29', end: '14:08' },
    { pd: '9', start: '14:12', end: '14:51' },
    { pd: '10', start: '14:55', end: '15:35' },
  ],
};

const optimizedBellSchedules = Object.entries(bellSchedules).map(([name, schedule]) => ({ name: name, schedule: schedule.map(j => ({ pd: j.pd, start: getSecondsFromString(j.start), end: getSecondsFromString(j.end) })) }));
