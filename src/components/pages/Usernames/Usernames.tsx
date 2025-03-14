import { Box } from "@mui/material";
import { TextIntro } from "./TextIntro";
import { Search } from "./Search";

export default function Usernames() {
  return (
    <Box sx={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <TextIntro />
      <Box pt={4} />
      <Search />
    </Box>
  );
}
