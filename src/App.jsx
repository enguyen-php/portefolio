import Acceuil from "./Acceuil.jsx"
import Documentations from "./Documentations.jsx"
import Ecole from "./Ecole.jsx"
import Entreprise from "./Entreprise.jsx"
import Veilles from "./Veilles.jsx"
import Apropos from "./Apropos.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <header className="header"> 
                <h1>NGUYEN Ethan</h1>
                <nav>
                    <Link className="nav-link" to="/">Accueil</Link>
                    <Link className="nav-link" to="/documentations">Documentations</Link>
                    <Link className="nav-link" to="/veilles">Veilles</Link>
                    <Link className="nav-link" to="/apropos">À propos</Link>
                </nav>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={<Acceuil />} />
                    <Route path="/documentations" element={<Documentations />} />
                    <Route path="/veilles" element={<Veilles />} />
                    <Route path="/ecole" element={<Ecole />} />
                    <Route path="/entreprise" element={<Entreprise />} />
                    <Route path="/apropos" element={<Apropos />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App