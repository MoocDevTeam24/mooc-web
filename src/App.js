import { CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import NeedAuth from "./components/auth/NeedAuth";
import Mainlayout from "./components/dashboard/MainLayout";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import AddUser from "./pages/dashboard/users/adduser";
import User from "./pages/dashboard/users/index";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <NeedAuth>
              <Mainlayout />
            </NeedAuth>
          }
        >
          <Route
            path="/dashboard"
            element={
              <NeedAuth>
                <Dashboard />
              </NeedAuth>
            }
          />
          <Route
            path="/users"
            element={
              <NeedAuth>
                <User />
              </NeedAuth>
            }
          />
          <Route
            path="/users/adduser/:id?"
            element={
              <NeedAuth>
                <AddUser />
              </NeedAuth>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
