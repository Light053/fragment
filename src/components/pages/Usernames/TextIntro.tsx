import { Box, Typography } from "@mui/material";

export const TextIntro = () => {
  return (
    <Box textAlign="center" pt={4}>
      <Typography
        variant="h4"
        color="white"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Buy and Sell Usernames
      </Typography>
      <Typography
        sx={{
          fontWeight: "semibold",
          color: (theme) => theme.palette.secondary.main,
        }}
        variant="body1"
        fontWeight={500}
      >
        Secure your name with blockchain in an ecosystem of 950+ million users
        and assign it as a link for your personal account, channel, or group.
        Learn more
      </Typography>
    </Box>
  );
};
