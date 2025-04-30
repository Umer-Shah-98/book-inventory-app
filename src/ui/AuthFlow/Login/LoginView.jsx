import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomButton } from "../../Components/CustomButton";
import { FormTextField } from "../../Components/Inputs/FormTextField";

export const LoginView = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle successful login
      console.log("Login data:", formData);
      // Add your authentication logic here
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Login
      </Typography>

      <FormTextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <FormTextField
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        showPasswordToggle={true}
        onTogglePasswordVisibility={() => setShowPassword(!showPassword)}
      />

      <CustomButton>Login</CustomButton>
    </Box>
  );
};
