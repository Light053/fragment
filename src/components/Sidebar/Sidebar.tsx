import { Drawer } from "@mui/material";

export const Sidebar = ({
  open,
  onClose,
  children,
  anchor,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchor: "left" | "right" | "top" | "bottom";
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      PaperProps={{
        sx: {
          backgroundColor: "#1a2026",
          color: "#fff",
          width: "288px",
        },
      }}
    >
      {children}
    </Drawer>
  );
};
