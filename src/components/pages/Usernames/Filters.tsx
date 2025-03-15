import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Filters = ({
  setFilterBySold,
  setFilterByPrice,
}: {
  setFilterBySold: (filter: string) => void;
  setFilterByPrice: (filter: string) => void;
}) => {
  const [state, setState] = useState("on_auction");
  const [price, setPrice] = useState("low");

  const handleStateChange = (e: SelectChangeEvent<string>) => {
    const newState = e.target.value;
    setState(newState);
    setFilterBySold(newState);
  };

  const handlePriceChange = (e: SelectChangeEvent<string>) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    setFilterByPrice(newPrice);
  };

  return (
    <Box
      sx={{
        display: "flex",
        px: 2,
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "15px",
        flexWrap: "wrap",
        gap: 2,
        "@media (max-width: 600px)": {
          flexDirection: "column",
          alignItems: "flex-start",
        },
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Top auctions
      </Typography>

      <Box
        display="flex"
        gap={2}
        mt={2}
        sx={{
          "@media (max-width: 600px)": {
            width: "100%",
            flexDirection: "column",
          },
        }}
      >
        <FormControl
          sx={{
            width: "150px",
            backgroundColor: "#212a33",
            height: "40px",
            borderRadius: "10px",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <InputLabel
            sx={{
              color: "#fff",
              fontWeight: "bold",
              "&.Mui-focused": { color: "#fff" },
            }}
            shrink
          >
            State
          </InputLabel>
          <Select
            value={state}
            onChange={handleStateChange}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              height: "40px",
              width: "100%",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <MenuItem value="on_auction">On auction</MenuItem>
            <MenuItem value="sold">Sold</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: "170px",
            backgroundColor: "#212a33",
            height: "40px",
            borderRadius: "10px",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <InputLabel
            sx={{
              color: "#fff",
              fontWeight: "bold",
              "&.Mui-focused": { color: "#fff" },
            }}
            shrink
          >
            Price
          </InputLabel>
          <Select
            value={price}
            onChange={handlePriceChange}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              height: "40px",
              width: "100%",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <MenuItem value="low">Price high to low</MenuItem>
            <MenuItem value="high">Price low to high</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filters;
