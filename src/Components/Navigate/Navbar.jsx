import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have imported Bootstrap CSS
import Routing from "./Routing";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>MyApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/list voiture'>List Voiture</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Sèmulation'>Sèmulation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Routing />

        </>
    );
}

export default Navbar;
