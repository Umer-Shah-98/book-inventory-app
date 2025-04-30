// src/renderer/pages/BooksPage.tsx - Based on your UI
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const BooksPage = () => {
  const [bookData, setBookData] = useState({
    name: "",
    price: "",
    date: "",
    notes: ""
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting book data:", bookData);
    // Here you would call your backend API
  };

  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: "#9c27b0" }}>
        رسید
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="کتاب کا نام"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              dir="rtl"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="قیمت"
              name="price"
              type="number"
              value={bookData.price}
              onChange={handleChange}
              dir="rtl"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="تاریخ"
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={bookData.date}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
              dir="rtl"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="دستخط"
              name="notes"
              value={bookData.notes}
              onChange={handleChange}
              dir="rtl"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#9c27b0",
                "&:hover": {
                  backgroundColor: "#7b1fa2"
                }
              }}
            >
              محفوظ کریں
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default BooksPage;
