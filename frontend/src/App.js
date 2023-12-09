import "./App.css";

import Header from "./components/Header";
import NotePage from "./pages/NotePage";

import NotesListPage from "./pages/NotesListPage";

// importing browser router and  route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
