import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import SaleFormPage from "./pages/SaleFormPage/SaleFormPage";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import SalesReports from "./pages/SalesReports/SalesReports";
import Forgot from "./pages/AuthPages/Forgot";
import AllSalesPage from "./pages/AllSalesPage/AllSalesPage";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />

            {/* Forms */}
            <Route path="/add-sale" element={<SaleFormPage />} />

            {/* Tables */}
            <Route path="/all-sales" element={<AllSalesPage />} />

            {/* Charts */}
            <Route path="/sales-report" element={<SalesReports />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<Forgot />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
