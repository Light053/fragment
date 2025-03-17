import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

type TimerProps = {
  remainingTime: string; // например, "2 days 9 hours 4 minutes"
};

export const Timer: React.FC<TimerProps> = ({ remainingTime }) => {
  // Парсим строку в общее число секунд
  const parseTimeString = (timeString: string): number => {
    const daysRegex = /(\d+)\s+days?/i;
    const hoursRegex = /(\d+)\s+hours?/i;
    const minutesRegex = /(\d+)\s+minutes?/i;

    const daysMatch = timeString.match(daysRegex);
    const hoursMatch = timeString.match(hoursRegex);
    const minutesMatch = timeString.match(minutesRegex);

    const days = daysMatch ? parseInt(daysMatch[1], 10) : 0;
    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return days * 86400 + hours * 3600 + minutes * 60;
  };

  const [secondsLeft, setSecondsLeft] = useState(
    parseTimeString(remainingTime)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (sec: number) => {
    const d = Math.floor(sec / 86400);
    sec %= 86400;
    const h = Math.floor(sec / 3600);
    sec %= 3600;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return { days: d, hours: h, minutes: m, seconds: s };
  };

  const { days, hours, minutes, seconds } = formatTime(secondsLeft);

  return (
    <Box display="flex" alignItems="center" gap={1} mt={3}>
      <Typography
        sx={{
          fontSize: "14px",
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        Ends in
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {days > 0 && (
          <>
            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: "8px",
                bgcolor: "#212a33",
                fontWeight: "bold",
              }}
            >
              {days} days
            </Box>
            <Typography
              sx={{
                color: (theme) => theme.palette.secondary.main,
                fontWeight: "bold",
              }}
            >
              :
            </Typography>
          </>
        )}
        <Box
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: "8px",
            bgcolor: "#212a33",
            fontWeight: "bold",
          }}
        >
          {hours.toString().padStart(2, "0")}
        </Box>

        <Typography
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontWeight: "bold",
          }}
        >
          :
        </Typography>
        <Box
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: "8px",
            bgcolor: "#212a33",
            fontWeight: "bold",
          }}
        >
          {minutes.toString().padStart(2, "0")}
        </Box>

        <Typography
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontWeight: "bold",
          }}
        >
          :
        </Typography>
        <Box
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: "8px",
            bgcolor: "#212a33",
            fontWeight: "bold",
          }}
        >
          {seconds.toString().padStart(2, "0")}
        </Box>
      </Box>
    </Box>
  );
};
