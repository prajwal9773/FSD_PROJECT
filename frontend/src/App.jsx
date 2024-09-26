// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import FloatingShape from './components/floatingShape'
// import {Route, Routes } from "react-router-dom";
// import LoginPage from './pages/LoginPage'
// import SignUpPage from './pages/SignUpPage'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
// <div className='h-screen w-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900 flex justify-center relative overflow-hidden'>
//     <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
//     <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
//     <FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

//     {/* <Routes>
//     <Route
// 					path='/'
// 					element={
// 						// <ProtectedRoute>
// 							"Home"
// 						// </ProtectedRoute>
// 					}
// 				/>
// 				<Route
// 					path='/signup'
// 					element={
// 						// <RedirectAuthenticatedUser>
// 							<SignUpPage />
// 						// </RedirectAuthenticatedUser>
// 					}
// 				/>
// 				<Route
// 					path='/login'
// 					element={
// 						// <RedirectAuthenticatedUser>
// 							<LoginPage />
// 						// </RedirectAuthenticatedUser>
// 					}
// 				/>
//     </Routes>

//  */}
//        <Routes>
//         <Route path ='/' element ={"Home"}/>
//         <Route path ='/signup' element = {<SignUpPage/>}/>
//         <Route path ='/login' element = {<LoginPage/>}/>

//        </Routes>

// </div>

//     </>

//   )
// }

// export default App

import { Navigate, Route, Routes } from "react-router-dom";
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
import Settings from "./components/TeamPage/Settings";
import BoardPage from './components/TeamPage/BoardPage.jsx';

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
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
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
    // 		className='min-h-screen bg-gradient-to-br
    // from-gray-900 via-emerald-900 to-blue-900 flex items-center justify-center relative overflow-hidden'
    >
      {/* <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} /> */}

      <Routes>
        {/* <Route
					path='/'
					element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/signup'
					element={
						<RedirectAuthenticatedUser>
							<SignUpPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route path='/verify-email' element={<EmailVerificationPage />} />
				<Route
					path='/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>
				catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Homepagelayout />} />
        <Route path="/logi/bg" element={<Background />} />
        <Route path="/settings" component={Settings} />
        <Route path="/boards/:boardId" element={<BoardPage />} />
        
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
