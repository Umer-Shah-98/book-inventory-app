// src/renderer/pages/SalesPage.tsx
import { Paper, Typography } from "@mui/material";
import React from "react";

const SalesPage = () => {
  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        فروخت شدہ کتب
      </Typography>
      <Typography variant="body1">
        یہاں فروخت شدہ کتب کا ریکارڈ دیکھیں
      </Typography>
    </Paper>
  );
};

export default SalesPage;
