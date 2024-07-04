import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error404 from "./pages/Error/Error404"
import { useState } from "react"
import { LoginContext } from "./contexts/loginContext"
import { UserProfileData } from "./types/userProfile"
import HomePage from "./pages/HomePage"
import SignIn from "./pages/Auth/SignIn"
import SignUp from "./pages/Auth/SignUp"
import ResetPassword from "./pages/Auth/ResetPassword"
import ProblemList from "./pages/ProblemList"
import ProblemDetail from "./pages/ProblemDetail"
import UserDashboard from "./pages/User/UserDashboard"
import EditUserProfile from "./pages/User/EditUserProfile"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState<UserProfileData>({
    // these are dummy data, don't reflect in ui
    username: '',
    email: '',
    avatarUrl: ''
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileData, setProfileData }}>
              <HomePage />
            </LoginContext.Provider>
          } />
          <Route path="/signin" element={
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileData, setProfileData }}>
              <SignIn />
            </LoginContext.Provider>
          } />
          <Route path="/problemset" element={
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileData, setProfileData }}>
              <ProblemList />
            </LoginContext.Provider>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/user/:username" element={
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileData, setProfileData }}>
              <UserDashboard />
            </LoginContext.Provider>
          } />
          <Route path="/user/:username/edit-profile" element={
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileData, setProfileData }}>
              <EditUserProfile />
            </LoginContext.Provider>
          } />
          <Route path="/problem/:problemId" element={
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileData, setProfileData }}>
              <ProblemDetail />
            </LoginContext.Provider>
          } />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
