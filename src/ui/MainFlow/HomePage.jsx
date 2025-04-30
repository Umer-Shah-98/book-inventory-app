// src/renderer/pages/HomePage.tsx - Basic intro page
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        مرحبا بكم في نظام إدارة المكتبة
      </Typography>
      <Typography variant="body1">
        استخدم القائمة الجانبية للتنقل بين الصفحات
      </Typography>
    </Paper>
  );
};

export default HomePage;
