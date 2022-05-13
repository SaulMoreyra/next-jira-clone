import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOutlined";
import useUi from "../../hooks/useUI";

export const Navbar = () => {
  const { openSideMenu } = useUi();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOpenOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
