import logo from './logo.svg';
import './App.css';
import Askquestion from './askquestion';
import HomePage from './home';
import About from './about'
import Login from './login'
import Register from './register'
import Contact from './contact'
import ListeQ from './QuestionListe'
import Users from './users'
import Contacts from './listecontact'
import ListeUsers from './listeuser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ask" element={<Askquestion/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/ListeQ" element={<ListeQ/>} />
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/listecontact" element={<Contacts/>} />
        <Route exact path="/listeuser" element={<ListeUsers/>} />
      </Routes>
    </Router>
  );
}

export default App;
