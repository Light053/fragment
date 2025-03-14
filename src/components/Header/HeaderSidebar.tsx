import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Sidebar } from "../Sidebar/Sidebar";

export const HeaderSidebar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Sidebar open={open} onClose={onClose} anchor="right">
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Sidebar>
  );
};
