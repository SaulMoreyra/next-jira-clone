import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { InboxOutlined, MailOutline } from "@mui/icons-material";
import useUi from "../../hooks/useUI";

const menuItems = ["Inbox", "Starred", "Send Email"];

export const Sidebar = () => {
  const { sidemenu, closeSideMenu } = useUi();

  return (
    <Drawer anchor="left" open={sidemenu} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
          <List>
            {menuItems.map((text, index) => (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlined /> : <MailOutline />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            {menuItems.map((text, index) => (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlined /> : <MailOutline />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
