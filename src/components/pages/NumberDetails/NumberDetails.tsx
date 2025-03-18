import { Box } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { NumberSlotSold } from "./NumberSlotState/NumberSlotSold";
import { NumberSlotNotSold } from "./NumberSlotState/NumberSlotNotSold";

export const NumberDetails = () => {
  const { selectedNumberSlot } = useAppSelector((state) => state.main);

  if (!selectedNumberSlot) return null;

  const { endedAt } = selectedNumberSlot;

  return (
    <Box px={1}>{endedAt ? <NumberSlotSold /> : <NumberSlotNotSold />}</Box>
  );
};
