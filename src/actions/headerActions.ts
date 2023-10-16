export const SET_HEADER_DISPLAY = "SET_HEADER_DISPLAY";

export const setHeaderDisplay = (display: string) => {
  const properDisplay =
    display == "pie" ? "WYKRES KOLOWY" : "WYKRES BAR/SCATTER";
  return {
    type: SET_HEADER_DISPLAY,
    payload: properDisplay,
  };
};
