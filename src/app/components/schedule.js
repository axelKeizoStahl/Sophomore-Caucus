"use client";
import { useState, useEffect } from 'react';
import { i18n } from '../../../next.config';

export const dynamic = "force-dynamic";
export default function Home() {
  const [timer, setTimer] = useState(new Date().getHours()*3600 + new Date().getMinutes()*60);
  let working_sched = optimizedBellSchedules.find(schedule => schedule.name == "Regular").schedule
  const [currpd, setCurrPd] = useState(()=>{
    console.log(working_sched)
    let low = 0
    let top = 19
    let mid = 9

    if (timer < working_sched[0].start) { return "Before School" }
    else if (timer > working_sched[9].end) { return "After School" }

    while (top - low > 1) {
      let current_pd = working_sched[Math.floor(mid/2)]
      if (mid%2 == 0) {
        var mid_time = current_pd.start;
      } else {
        var mid_time = current_pd.end;
      }

      if (mid_time == timer) {
        return current_pd.pd
      } else if (mid_time > timer) {
        top = mid
        mid = Math.floor((low + top) / 2);
      } else {
        low = mid
        mid = Math.floor((low + top) / 2);
      }
    }
    if (low % 2 == 0) {
      return low / 2 + 1
    } else {
      return Math.floor(low / 2) + 1
    }
  });

  const [min, setMin] = useState(()=>{
    if (typeof(currpd) == 'string') { return currpd.split(' ')}
    else {
      let sec_from_start = timer - working_sched[currpd - 1].start;
      let sec_to_end = working_sched[currpd - 1].end - timer;
      return [Math.floor(sec_from_start / 60), Math.floor(sec_to_end / 60)]
    }
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
      let away_from_min = timer % 60
      if (away_from_min == 0) {
        if (typeof(currpd) == 'string') {
          if (timer > 86400) {
            setTimer(0)
            setMin(['Before', 'School'])
            setCurrPd('Before School')
          }
        }
        else if (working_sched[currpd - 1].end < timer) {
          if (currpd == 10) {
            setCurrPd("After School");
            setMin(['After', 'School']);
          } else {
            setCurrPd(currpd + 1)
            setMin([0, Math.floor((working_sched[currpd - 1].end - timer) / 60)])
          }
        }
        else if (typeof(currpd) != 'string') {
          setMin(min + 1)
        }
      }


    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
        <div className="sched">
          <div className="period">{currpd}</div>
          <div className={`${typeof(currpd) == 'string' ? 'col' :''} timer`}>
            <div className="min min-don">{min[0]}</div>
            <p className={`${typeof(currpd) == 'string' ? 'hide' : 'sec'}`}>{60 - (timer % 60)}</p>
            <div className="min min-to">{min[1]}</div>
          </div>
        </div>
  )
}


function getSecondsFromString(time) {
	const [hours, minutes] = time.split(':')
	return Number(hours) * 3600 + Number(minutes) * 60
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
}

const optimizedBellSchedules = Object.entries(bellSchedules).map(([name, schedule]) => ({ name: name, schedule: schedule.map(j => ({ pd: j.pd, start: getSecondsFromString(j.start), end: getSecondsFromString(j.end) })) }))
