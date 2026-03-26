import Ecole from "./Ecole.jsx"
import Entreprise from "./Entreprise.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Documentations() {
    return (
        <>
            <h1>Veuillez trouver le "Tableau de synthèse" et</h1>
            <h1>toutes les documentations relatives à ma</h1>
            <h1>formation et mes projets en entreprise.</h1>
            <a href="#">VISUALISER MON TABLEAU DE SYNTHESE en PDF</a>
            <a href="#">TELECHARGER MON TABLEAU DE SYNTHESE en version modifiable</a>
            <h2>Mes réalisations</h2>

            <nav>
                <Link to="/ecole">Ecole</Link> |{" "}
                <Link to="/entreprise">Entreprise</Link>
            </nav>
        </>
    )
}

export default Documentations