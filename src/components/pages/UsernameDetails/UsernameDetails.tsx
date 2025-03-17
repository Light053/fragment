import { Box } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { SlotNotSold } from "./SlotState/SlotNotSold";
import { SlotSold } from "./SlotState/SlotSold";
export const UsernameDetails = () => {
  const { selectedUsernameSlot } = useAppSelector((state) => state.main);

  if (!selectedUsernameSlot) return null;

  const { endedAt } = selectedUsernameSlot;

  return <Box>{endedAt ? <SlotSold /> : <SlotNotSold />}</Box>;
};
