import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

const calculate = () => {
  const now = dayjs().tz("Asia/Ho_Chi_Minh");
  const target = dayjs.tz("2025-12-21 11:30", "Asia/Ho_Chi_Minh");

  const diffSec = target.diff(now, "second");

  if (diffSec <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diffSec / (24 * 3600)),
    hours: Math.floor((diffSec % (24 * 3600)) / 3600),
    minutes: Math.floor((diffSec % 3600) / 60),
    seconds: diffSec % 60,
  };
};

export const useCountdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};
