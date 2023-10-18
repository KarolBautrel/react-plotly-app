import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
interface NavbarProps {
  setChartDisplay: (type: string) => void;
  setHeaderDisplay: (type: string) => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  setChartDisplay,
  setHeaderDisplay,
}) => {
  const handleChartDisplay = (type: string) => {
    setChartDisplay(type);
    setHeaderDisplay(type);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plot App
          </Typography>
          <Button color="inherit" onClick={() => handleChartDisplay("scatter")}>
            Scatter/Bar
          </Button>
          <Button color="inherit" onClick={() => handleChartDisplay("pie")}>
            Pie
          </Button>
          <Button color="inherit">Option Three</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
