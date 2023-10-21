import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NotesListPage from "./pages/NotesListPage";
import NotePage from './pages/NotePage';

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
