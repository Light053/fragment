import { Box, Typography } from "@mui/material";

export const TextIntroNumbers = () => {
  return (
    <Box textAlign="center" pt={4}>
      <Typography
        variant="h4"
        color="white"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Buy and Sell Anonymous Numbers
      </Typography>
      <Typography
        sx={{
          fontWeight: "semibold",
          color: (theme) => theme.palette.secondary.main,
        }}
        variant="body1"
        fontWeight={500}
      >
        Trade IDs not tied to a SIM card which allow logging into Telegram with
        your blockchain account. These numbers only work on Telegram.
      </Typography>
      <Typography
        sx={{
          fontWeight: "semibold",
          color: (theme) => theme.palette.secondary.main,
          mt: 3,
        }}
        variant="body1"
        fontWeight={500}
      >
        All 136,566 numbers sold out in December 2022. Now, you can only buy
        from an existing owner.
      </Typography>
    </Box>
  );
};
