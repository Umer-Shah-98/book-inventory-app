import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "../AuthFlow/Login/Login";
import { SignUp } from "../AuthFlow/SignUp/SignUp";
import { AuthLayout } from "../Components/Layouts/AuthLayout";
import MainLayout from "../Components/Layouts/MainLayout";
import BooksPage from "../MainFlow/BooksPage";
import HomePage from "../MainFlow/HomePage";
import SalesPage from "../MainFlow/SalesPage";
import UnProtectedRoute from "./UnProtectedRoute";

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={<UnProtectedRoute Component={AuthLayout} />}
        >
          <Route index element={<UnProtectedRoute Component={Login} />} />
          <Route
            path="signup"
            element={<UnProtectedRoute Component={SignUp} />}
          />
        </Route>
        <Route path="/" element={<UnProtectedRoute Component={MainLayout} />}>
          <Route
            index
            path="/"
            element={<UnProtectedRoute Component={HomePage} />}
          />
          <Route
            path="books"
            element={<UnProtectedRoute Component={BooksPage} />}
          />
          <Route
            path="sales"
            element={<UnProtectedRoute Component={SalesPage} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
