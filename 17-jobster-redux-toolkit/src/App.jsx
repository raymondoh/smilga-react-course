import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LandingPage, HomePage, ErrorPage, LoginPage, RegisterPage, PrivateRoute } from "./pages";
// dashboard
import { AddJob, AllJobs, Profile, Stats } from "./pages/dashboard";
//layouts
import { SharedLayout, LandingLayout, RootLayout } from "./layouts";

// outlet in the layout component
const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/">
        {/** landing route */}
        <Route index element={<LandingPage />} />
        {/** login & register routes with layout */}
        <Route path="/" element={<LandingLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        {/** private dashboard routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="dashboard" element={<PrivateRoute />}>
            <Route index element={<Stats />} />
            <Route path="addjob" element={<AddJob />} />
            <Route path="alljobs" element={<AllJobs />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
        {/** closing route */}
      </Route>
    </React.Fragment>
  )
);

function App() {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" />
      <RouterProvider router={router}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
