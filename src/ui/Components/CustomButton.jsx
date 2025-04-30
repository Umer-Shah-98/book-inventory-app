import { Button } from "@mui/material";
import React from "react";

export const CustomButton = ({
  children,
  onClick,
  disabled = false,
  color = "primary",
  type = "button",
  fullWidth = false,
  size = "medium",
  startIcon,
  endIcon,
  ...props
}) => {
  // Get color values from theme or use custom color
  const getButtonColors = () => {
    if (disabled) {
      return {
        bgcolor: "action.disabledBackground",
        color: "text.disabled",
        "&:hover": {
          bgcolor: "action.disabledBackground"
        }
      };
    }

    if (color.startsWith("#")) {
      // Custom hex color
      return {
        bgcolor: color,
        color: getContrastText(color),
        "&:hover": {
          bgcolor: darkenColor(color, 0.15)
        }
      };
    }

    // Default MUI color (primary, secondary, etc.)
    return {
      bgcolor: `${color}.main`,
      color: `${color}.contrastText`,
      "&:hover": {
        bgcolor: `${color}.dark`
      }
    };
  };

  // Helper function to darken color (simplified)
  const darkenColor = (hex, amount) => {
    // In a real app, use a library like color.js or polished
    return hex; // Replace with actual darkening logic
  };

  // Helper function to get contrast text (simplified)
  const getContrastText = (hex) => {
    // In a real app, use theme.palette.getContrastText()
    return "#ffffff"; // Default to white for demo
  };

  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        textTransform: "none",
        fontWeight: 500,
        borderRadius: 1,
        px: 3,
        py: 1,
        transition: "all 0.2s ease",
        "&:active": {
          transform: disabled ? "none" : "scale(0.98)"
        },
        ...getButtonColors(),
        ...props.sx // Allow overriding styles
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
