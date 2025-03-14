import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Close";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };
  return (
    <Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter a Telegrame username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#cbd7e5b3" }} />
            </InputAdornment>
          ),
          endAdornment: searchTerm ? (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} edge="end">
                <ClearIcon style={{ color: "#888" }} />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
        sx={{
          borderRadius: "8px",
          backgroundColor: "#242e38",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "& input": {
              color: "#fff",
            },
            "& placeholder": {
              color: "#cbd7e5b3",
            },
          },
        }}
      />
    </Box>
  );
};
