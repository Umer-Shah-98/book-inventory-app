import { Box } from "@mui/material";
const ProtectedRoute = ({ Component }) => {
  return (
    <Box>
      <Component />
    </Box>
  );
};

export default ProtectedRoute;
