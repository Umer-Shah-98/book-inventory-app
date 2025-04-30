import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/logos/logo-01-transparent.png";
export const AuthLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Box>
            <Box>
              <img src={Logo} width={120} alt="logo" />
            </Box>
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
