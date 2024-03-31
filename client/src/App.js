import { Routes, Route,Navigate } from "react-router-dom";

import Spinner from "./components/shared/Spinner.js";
import { lazy ,Suspense} from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderShimmer from "./components/shared/Layout/HeaderShimmer.js";
import AnalyticsShimmer from "./components/shared/Layout/AnalyticsShimmer.js";
import Login from "./pages/auth/Login";
//const Login=lazy(()=>import('./pages/auth/Login'))
//import Register from "./pages/auth/Register";
const Register=lazy(()=>import("./pages/auth/Register"))
//import HomePage from "./pages/HomePage";
const HomePage = lazy(() => import('./pages/HomePage.js'));
//import ProtectedRoute from "./components/Routes/ProtectedRoute";
const ProtectedRoute=lazy(()=>import("./components/Routes/ProtectedRoute"))
//import PublicRoute from "./components/Routes/PublicRoute";
const PublicRoute=lazy(()=>import("./components/Routes/PublicRoute"))
//import Donar from "./pages/Dashboard/Donar";
const Donar=lazy(()=>import("./pages/Dashboard/Donar"))
//import Hospitals from "./pages/Dashboard/Hospitals";
const Hospitals=lazy(()=>import("./pages/Dashboard/Hospitals"))
//import OrganisationPage from "./pages/Dashboard/OrganisationPage";
const OrganisationPage=lazy(()=>import("./pages/Dashboard/OrganisationPage"))
//import Consumer from "./pages/Dashboard/Consumer";
const Consumer=lazy(()=>import("./pages/Dashboard/Consumer"))
//import Donation from "./pages/Donation";
const Donation=lazy(()=>import("./pages/Donation"))
//import Analytics from "./pages/Dashboard/Analytics";
const Analytics=lazy(()=>import("./pages/Dashboard/Analytics"))
//import DonarList from "./pages/Admin/DonarList";
const DonarList=lazy(()=>import("./pages/Admin/DonarList"))
//import HospitalList from "./pages/Admin/HospitalList";
const HospitalList=lazy(()=>import("./pages/Admin/HospitalList"))
//import OrgList from "./pages/Admin/OrgList";
const OrgList=lazy(()=>import("./pages/Admin/OrgList"))
//import AdminHome from "./pages/Admin/AdminHome";
const AdminHome=lazy(()=>import("./pages/Admin/AdminHome"))




function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        
      <Route
          path="/"
          element={<Navigate to="/login" />} // Redirect to the desired starting route of the app
  />



        <Route
          path="/admin"
          element={
            <ProtectedRoute>
                <Suspense fallback={<HeaderShimmer/>}>
            <AdminHome />
          </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
                <Suspense fallback={<HeaderShimmer/>}>
                <DonarList />
          </Suspense>
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <HospitalList/>
          </Suspense>
             
            </ProtectedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <OrgList />
          </Suspense>
             
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <Hospitals />
          </Suspense>
             
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Suspense>
                <Analytics />
          </Suspense>
             
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <Consumer />
          </Suspense>
             
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <Donation />
          </Suspense>
             
            </ProtectedRoute>
          }
        />
        <Route
          path="/orgnaisation"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <OrganisationPage />
          </Suspense>
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <Donar />
          </Suspense>
             
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Suspense fallback={<HeaderShimmer/>}>
                <HomePage />
          </Suspense>
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
            
                <Login />
      
             
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Suspense fallback={<Spinner/>}>
                <Register />
          </Suspense>
             
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
