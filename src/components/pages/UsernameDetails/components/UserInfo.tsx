import { List, ListItem, Typography } from "@mui/material";

export const UserInfo = ({ username }: { username: string }) => {
  return (
    <List
      sx={{
        bgcolor: (theme) => theme.palette.secondary.dark,
        pl: 1,
        pr: 1,
        borderRadius: "10px",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Telegram Username
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            fontSize: "12px",
          }}
        >{`@${username}`}</Typography>
      </ListItem>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Web Adress
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            fontSize: "12px",
          }}
        >{`t.me/${username}`}</Typography>
      </ListItem>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Ton Web 3.0 Adress
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            fontSize: "12px",
          }}
        >{`${username}.t.me`}</Typography>
      </ListItem>
    </List>
  );
};
