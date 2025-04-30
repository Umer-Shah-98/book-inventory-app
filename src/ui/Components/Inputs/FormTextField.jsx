import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";

export const FormTextField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  helperText,
  showPasswordToggle = false,
  onTogglePasswordVisibility
}) => {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        error={error}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: showPasswordToggle && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onTogglePasswordVisibility}
                edge="end"
              >
                {type === "password" ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
