import "./App.css";
import Header from "./component/Header";
import Footer from './component/Footer';
import NotesListPage from './pages/NotesListPage';

function App() {
  return (
    <div className="App">
      <Header />
      <NotesListPage />
      <Footer />
    </div>
  );
}

export default App;