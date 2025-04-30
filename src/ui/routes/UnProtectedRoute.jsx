import { Box } from "@mui/material";
const UnProtectedRoute = ({ Component }) => {
  return (
    <Box sx={{ height: "100%" }}>
      <Component />
    </Box>
  );
};

export default UnProtectedRoute;
