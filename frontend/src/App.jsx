import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import LoadingSpinner from "./components/LoadingSpinner";
import Background from "./components/TeamPage/Background";
import Homepagelayout from "./components/Homepage/Homepagelayout";
import BoardPage from "./components/TeamPage/BoardPage.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import Login from "./user/Login.jsx";
import SelectionPage from "./components/SelectionPage.jsx";
import User from './components/roles/user/User';
import Admin from "./components/roles/admin/Admin";
// import SignUpPage1 from './components/pages/SignUpPage/SignUpPage.jsx';
// import LoginPage1 from './components/pages/LoginPage/LoginPage.jsx';
import AdminAccess from './components/pages/AdminAccessPage/AdminAccessPage.jsx';
// import AdminPanel from './components/AdminPanel.jsx';
// import Sidebar from './components/sidebar.jsx';

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/selection" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const location = useLocation(); // Access current route

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  // Check if the current path is `/logi/bg`
  const isBackgroundPage = location.pathname === "/logi/bg";

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${!isBackgroundPage ? 'bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900' : ''}`}
    >
      {/* Only show floating shapes if it's NOT the /logi/bg route */}
      {!isBackgroundPage && (
        <>
          <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
          <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
          <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
        </>
      )}

      <Routes>
        <Route
          path="/da"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/* Route with its own specific background */}
        <Route path="/logi/teamleader" element={<Background />} />
        <Route path="/selection" element={<SelectionPage />} />
		
        {/* Additional routes */}
        <Route path="/boards/:boardId" element={<BoardPage />} />
        <Route path="/" element={<Homepagelayout/>} />
        <Route path="/user" element={<Login />} />
        {/* <Route path="/sign" element={<SignUpPage1 />} /> */}
        <Route path="/useer" element={<User />} />
              {/* <Route path="/User/Login" element={<LoginPage1 />} /> */}
              <Route path="/Admin" element={<Admin />} />

              <Route path='/User/AdminAccess' element={<AdminAccess />} />
      </Routes>

      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
}

export default App;
