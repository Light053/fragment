import { Dispatch } from "@reduxjs/toolkit";
import {} from "../store/actions";
import { setTelegramUser } from "../store/MainSlice";

interface LogoutParams {
  dispatch: Dispatch;
  navigation: (path: string) => void;
}

interface HandleClickParams {
  event: React.MouseEvent<HTMLElement>;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const handleClick = ({ event, setAnchorEl }: HandleClickParams) => {
  setAnchorEl(event.currentTarget);
};

export const handleClose = (
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchorEl(null);
};
export const handleLogout = ({ dispatch, navigation }: LogoutParams) => {
  localStorage.removeItem("telegram_user");
  dispatch(setTelegramUser(null));
  navigation("/auth");
};
