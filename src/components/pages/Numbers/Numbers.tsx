import { Box } from "@mui/material";
import { SearchNumbers } from "./components/SearchNumbers";
import { TextIntroNumbers } from "./components/TextIntroNumbers";
import { NumbersList } from "./NumbersList";

export const Numbers = () => {
  return (
    <Box px={1} pb={10}>
      <TextIntroNumbers />
      <Box pt={4} />
      <SearchNumbers />
      <NumbersList />
    </Box>
  );
};
