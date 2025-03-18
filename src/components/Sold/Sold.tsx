import { Box, useTheme } from "@mui/material";

export const Sold = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "fit-content",
        borderRadius: "5px",
        fontWeight: "bold",
        marginLeft: "5px",
        fontSize: "10px",
        color: "#ff5863",
        backgroundColor: "rgba(255, 88, 99, 0.1)",
        padding: "2px 5px",
        [theme.breakpoints.up("md")]: { display: "none" },
        [theme.breakpoints.down("xs")]: {
          ml: 0,
          mt: "5px",
        },
      }}
    >
      Sold
    </Box>
  );
};
