/*
Given a list of people with their names and the time slots when they
are available in a given week, and a meeting length, return the first
meeting time available (if possible). Format the input however you’d
like to receive it!
*/

const today = new Date();
const now = +today;
const hourInMillis = 3600 * 1000;

const eventA = {
  name: "eventA",
  start_time: now,
  end_time: now + hourInMillis,
};
const eventB = {
  name: "eventB",
  start_time: now + hourInMillis,
  end_time: now + 2 * hourInMillis,
};
const people = [
  {
    name: "A",
    schedule: [eventA, eventB],
  },
  {
    name: "B",
    schedule: [eventB],
  },
];

const calculateCombinedSchedule = (people) => {
  let combinedScheduleSet = new Set();
  for (let { schedule } of people) {
    for (let { start_time, end_time } of schedule) {
      combinedScheduleSet.add(`${start_time}-${end_time}`);
    }
  }
  return [...combinedScheduleSet].map((timeStr) =>
    timeStr.split("-").map(Number)
  );
};

const firstAvailableSlot = (people, meetingLengthInMillis) => {
  const combinedSchedules = calculateCombinedSchedule(people);
  const endOfWeek = +new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );
  let firstAvailableStartTime;

  for (let checkTime = +new Date(); checkTime < endOfWeek; checkTime += 1000) {
    let endOfMeeting = checkTime + meetingLengthInMillis;
    let hasCollided = false;
    for (let [start_time, end_time] of combinedSchedules) {
      if (checkTime >= start_time && checkTime <= end_time) {
        checkTime = end_time;
        hasCollided = true;
      }
      if (endOfMeeting >= start_time && endOfMeeting <= end_time) {
        checkTime = end_time;
        hasCollided = true;
      }
    }
    if (!hasCollided) {
      firstAvailableStartTime = checkTime;
      break;
    }
  }
  return firstAvailableStartTime;
};

console.log(
  people,
  new Date(firstAvailableSlot(people, hourInMillis)).toLocaleString()
);
