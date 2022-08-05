import { toast } from "react-toastify";

export const showToast = (toastTheme, toastMsg) => {
  toast[toastTheme](toastMsg, {
    position: "bottom-left",
    autoClose: 1500,
    closeOnClick: true,
    newestOnTop: true,
    theme: "colored",
    hideProgressBar: true,
  });
};
