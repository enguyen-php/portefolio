import { Link } from "react-router-dom"

function Documentations() {
    return (
        <div className="card">
            <h2>Documentations</h2>

            <p>
                Vous trouverez ici le tableau de synthèse ainsi que toutes les
                documentations relatives à ma formation et à mes projets.
            </p>

            <div className="links">
                <a href="#">📄 Visualiser le tableau de synthèse (PDF)</a>
                <a href="#">⬇️ Télécharger la version modifiable</a>
            </div>

            <h3>Mes réalisations</h3>

            <nav className="sub-nav">
                <Link to="/ecole">🎓 École</Link>
                <Link to="/entreprise">🏢 Entreprise</Link>
            </nav>
        </div>
    )
}

export default Documentations