// src/renderer/components/MainLayout.tsx
import {
  Book as BookIcon,
  Home as HomeIcon,
  Receipt as ReceiptIcon,
  Settings as SettingsIcon,
  Translate as TranslateIcon
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const MainLayout = ({ children }) => {
  const user = null;
  const navigation = useNavigate();
  const menuItems = [
    { text: "سر ورق", icon: <HomeIcon />, path: "/" },
    { text: "رسیدہ کتابیں", icon: <BookIcon />, path: "books" },
    { text: "کتاب کا اندراج", icon: <ReceiptIcon />, path: "#" },
    { text: "کتابوں کا ترجمہ", icon: <TranslateIcon />, path: "#" },
    { text: "فروخت شدہ کتب", icon: <ReceiptIcon />, path: "sales" },
    { text: "اطلاعات", icon: <SettingsIcon />, path: "#" }
  ];
  useEffect(() => {
    if (!user) {
      navigation("/auth");
    }

    return () => {};
  }, []);

  return (
    <Box sx={{ display: "flex", direction: "rtl" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ backgroundColor: "#9c27b0" }}>
          <Typography variant="h6" noWrap component="div">
            جامعہ العلوم الإسلامیہ
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
