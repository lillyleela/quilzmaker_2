import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import QuizListing from "./pages/QuizListing";
import QuizCreation from "./pages/QuizCreation";
import QuizTaking from "./pages/QuizTaking";
import QuizResults from "./pages/QuizResults";
import LoginRegister from "./pages/LoginRegister";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />

          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/quizzes"
                element={
                  <ProtectedRoute>
                    <QuizListing />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/create"
                element={
                  <ProtectedRoute>
                    <QuizCreation />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/quiz/:id"
                element={
                  <ProtectedRoute>
                    <QuizTaking />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/results"
                element={
                  <ProtectedRoute>
                    <QuizResults />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginRegister />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
