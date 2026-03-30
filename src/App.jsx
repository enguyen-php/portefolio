import Acceuil from "./Acceuil.jsx"
import Documentations from "./Documentations.jsx"
import Ecole from "./Ecole.jsx"
import Entreprise from "./Entreprise.jsx"
import Veilles from "./Veilles.jsx"
import Apropos from "./Apropos.jsx"
import img1 from "./assets/img1.webp"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Acceuil</Link> |{" "}
                    <Link to="/documentations">Documentations</Link> |{" "}
                    <Link to="/veilles">Veilles</Link>
                    <Link to="/apropos">Apropos</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Acceuil />} />
                    <Route path="/documentations" element={<Documentations />} />
                    <Route path="/veilles" element={<Veilles />} />
                    <Route path="/ecole" element={<Ecole />} />
                    <Route path="/entreprise" element={<Entreprise />} />
                    <Route path="/apropos" element={<Apropos />} />
                </Routes>
            </BrowserRouter>

            <img src="img1" alt="./assets/img1.webp" />
        </>
    )
}

export default App