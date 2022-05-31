import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useUi } from "../../hooks";
import NextLink from "next/link";

export const Navbar = () => {
  const { openSideMenu } = useUi();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOpenOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link underline="none" color="white">
            <Typography variant="h6">OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
