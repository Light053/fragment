import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Close";
import { changeNumberFilter } from "../../../store/MainSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export const SearchNumbers = () => {
  const { numberFilter } = useAppSelector((state) => state.main);

  const [searchTerm, setSearchTerm] = useState(numberFilter);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(changeNumberFilter(searchTerm || ""));
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, dispatch]);

  const handleClear = () => {
    setSearchTerm("");
    dispatch(changeNumberFilter(""));
    inputRef.current?.focus();
  };

  return (
    <Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter a phone number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#cbd7e5b3" }} />
              <Typography
                fontWeight={"bold"}
                fontSize={"18px"}
                color="#fff"
                mx={1}
              >
                +888
              </Typography>
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
