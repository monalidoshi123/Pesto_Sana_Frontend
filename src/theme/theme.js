import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#7C55D3",
      main: "#5F2CD0",
      dark: "#4A21A4",
      contrastText: "#fff",
    },
    secondary: {
      light: "#7C55D3",
      main: "#5F2CD0",
      dark: "#4A21A4",
      contrastText: "#fff",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#252525",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: 4,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "#fff",
        },
        "&:hover $notchedOutline": {
          borderColor: "#fff",
        },
        color: "white",
        height: "50px",
      },
    },

    MuiTableCell: {
      head: {
        fontWeight: 550,
        fontSize: "1.00rem",
        lineHeight: "normal",
      },
      root: {
        padding: "4px 16px 4px 24px",
      },
      stickyHeader: {
        backgroundColor: "#7C55D3",
      },
    },
    MuiTableRow: {
      head: {
        height: 50,
      },
      root: {
        height: 50,
      },
      hover: {
        "&$hover:hover": {
          backgroundColor: "#7C55D3",
        },
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: "24px",
        lineHeight: "normal",
        "&$selected": {
          backgroundColor: "#fff",
        },
        "&$selected:hover": {
          backgroundColor: "#7C55D3",
        },
        "&:hover": {
          backgroundColor: "#7C55D3",
        },
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },

      hover: {
        "&$hover:hover": {
          backgroundColor: "#7C55D3",
        },
      },
    },
    MuiListItemText: {
      root: {
        padding: "0px 0px",
      },
    },
  },
});

export default theme;
