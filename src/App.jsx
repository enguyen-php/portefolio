import Acceuil from "./Acceuil.jsx"
import Documentations from "./Documentations.jsx"
import Ecole from "./Ecole.jsx"
import Entreprise from "./Entreprise.jsx"
import Veilles from "./Veilles.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Acceuil</Link> |{" "}
                    <Link to="/documentations">Documentations</Link> |{" "}
                    <Link to="/veilles">Veilles</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Acceuil />} />
                    <Route path="/documentations" element={<Documentations />} />
                    <Route path="/veilles" element={<Veilles />} />
                    <Route path="/ecole" element={<Ecole />} />
                    <Route path="/entreprise" element={<Entreprise />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App