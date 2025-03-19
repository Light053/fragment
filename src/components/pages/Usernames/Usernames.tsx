import { Box } from "@mui/material";
import { TextIntro } from "./TextIntro";
import { Search } from "./Search";
import { UserList } from "./UserList";
import WalletInfo from "../../WalletInfo/WalletInfo";
import { TonConnectButtonComponent } from "../../TonConnectButton/TonConnectButton";

export default function Usernames() {
  return (
    <Box
      sx={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "100px" }}
    >
      <TextIntro />
      <Box pt={4} />
      <Search />
      <UserList />
      <TonConnectButtonComponent />
      <WalletInfo />
    </Box>
  );
}
