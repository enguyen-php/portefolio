import Home from "./Home.jsx"
import Documentations from "./Documentations.jsx"
import VeillesTechnologiques from "./VeillesTechnologiques.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/documentations">Documentations</Link> |{" "}
                    <Link to="/veillestechnologiques">Veilles technologiques</Link> |{" "}
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/documentations" element={<Documentations />} />
                    <Route path="/veillestechnologiques" element={<VeillesTechnologiques />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App